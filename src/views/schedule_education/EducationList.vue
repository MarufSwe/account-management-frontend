<template>
  <div v-if="all_education">
    <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
          <h3 style="font-weight: bold" class="text-primary">Schedule Education List</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/create-education'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px; margin-right: 20px">
                <span class="fas fa-plus"></span> Create Education
              </button>
            </a>
          </router-link>
        </div>
      </div>
    <table class="table table-hover">
      <thead class="tableHeader">
      <tr>
        <th scope="col">SL</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Brand</th>
        <th scope="col">Date & Time</th>
        <th scope="col">Hours</th>
        <th scope="col">Vendor Name</th>
      </tr>
      </thead>

      <tr
        class="tableRow"
        v-for="(education, SL) in all_education"
        :key="education">
        <td>{{SL+1}}</td>
        <td>{{education.name}}</td>
        <td>{{education.address}}</td>
        <td>{{education.phone}}</td>
        <td>{{education.email}}</td>
        <td>{{education.brand}}</td>
        <td>{{education.date_time}}</td>
        <td>{{education.no_of_hours}}</td>
        <td v-if="education.acc_vendor">{{education.acc_vendor.vendor_name}}</td>

        <td class="td_action">
          <i
            class="fas fa-trash-alt"
            @click="deleteEducationItem(education.id) in all_education"
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
  name: 'VendorList',
  data () {
    return {
      all_education: null
    }
  },
  async created () {
    await this.GetScheduleEducationList()
  },
  methods: {
    GetScheduleEducationList: function () {
      axios.get('http://127.0.0.1:8000/api/education/').then((response) => {
        this.all_education = response.data.results
        console.log('ALLDATA##', this.all_education)
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
          axios.delete('http://127.0.0.1:8000/api/education/' + id + '/').then((response) => {
            if (response.status === 204) {
              this.GetScheduleEducationList()
            }
          })
          Swal.fire(
            'Deleted!',
            'Your Education has been deleted!!',
            'success'
          )
        } else {
          Swal.fire(
            'Cancelled',
            'Your Eduction has not been deleted !',
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
