<template>
  <div v-if="all_report">
    <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
          <h3 style="font-weight: bold" class="text-primary">Report List</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/create-report'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px; margin-right: 20px">
                <span class="fas fa-plus"></span> Create Report
              </button>
            </a>
          </router-link>
        </div>
      </div>
    <table class="table table-hover">
      <thead class="tableHeader">
      <tr>
        <th scope="col">SL</th>
        <th scope="col">Brand</th>
        <th scope="col">Product Location</th>
        <th scope="col">Brand Exposure</th>
        <th scope="col">Product Visibility</th>
        <th scope="col">Vendor ID</th>
        <th scope="col">Vendor Name</th>
        <th scope="col">Address</th>
        <th scope="col">State</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Owner Name</th>
      </tr>
      </thead>

      <tr
        class="tableRow"
        v-for="(report, SL) in all_report"
        :key="report">
        <td>{{SL+1}}</td>
        <td>{{report.brand}}</td>
        <td>{{report.product_location}}</td>
        <td>{{report.brand_exposure}}</td>
        <td>{{report.product_visibility}}</td>
        <td v-if="report.acc_vendor">{{report.acc_vendor.vendor_name}}</td>
        <td>{{report.acc_vendor.vendor_id}}</td>
        <td>{{report.acc_vendor.address}}</td>
        <td>{{report.acc_vendor.state}}</td>
        <td>{{report.acc_vendor.phone}}</td>
        <td>{{report.acc_vendor.email}}</td>
        <td>{{report.acc_vendor.owner_name}}</td>

        <td class="td_action">
          <i
            class="fas fa-trash-alt"
            @click="deleteEducationItem(report.id) in all_report"
          ></i>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'ReportList',
  data () {
    return {
      all_report: null
    }
  },
  async created () {
    await this.GetReportList()
  },
  methods: {
    GetReportList: function () {
      axios.get('http://127.0.0.1:8000/api/create-report/').then((response) => {
        this.all_report = response.data.results
        console.log('ALLDATA##', this.all_report)
        console.log(response.status)
      })
    },

    deleteEducationItem: function (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((response) => {
        if (response.isConfirmed) {
          axios.delete('http://127.0.0.1:8000/api/create-report/' + id + '/').then((response) => {
            if (response.status === 204) {
              this.GetReportList()
            }
          })
          Swal.fire(
            'Deleted!',
            'Your Report has been deleted!!',
            'success'
          )
        } else {
          Swal.fire(
            'Cancelled',
            'Your Report has not been deleted !',
            'error'
          )
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
