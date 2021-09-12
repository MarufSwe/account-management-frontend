<template>
  <div v-if="all_vendors">
    <h2 style="font-weight: bold">Where are your Product Solde?</h2>
    <hr>
    <div class="row">
      <div class="col-6">
        <router-link :to="{path: 'home'}">
          <h5 style="font-weight: bold" class="text-primary">Vendor List</h5>
        </router-link>
      </div>

      <div class="col-6">
        <router-link :to="{path: '/vendor'}">
          <a class="float" style="position: absolute; right: 0">
            <button type="button" class="btn btn-primary" style="font-size: 15px; margin-right: 20px">
              <span class="fas fa-plus"></span> Create Vendor
            </button>
          </a>
        </router-link>
      </div>
    </div>
    <table class="table table-hover">
      <thead class="tableHeader">
      <tr>
        <th scope="col">SL</th>
        <th scope="col">Vendor Name</th>
        <th scope="col">Vendor Id</th>
        <th scope="col">Address</th>
        <th scope="col">State</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Owner Name</th>
        <th scope="col">Credit Allowance</th>
        <th scope="col">Action</th>
        <th scope="col">Last Order</th>
        <th scope="col">Image</th>
      </tr>
      </thead>

      <tr
        class="tableRow"
        v-for="(vendor, SL) in all_vendors"
        :key="vendor">
        <td>{{SL+1}}</td>
        <td>{{vendor.vendor_name}}</td>
        <td>{{vendor.vendor_id}}</td>
        <td>{{vendor.address}}</td>
        <td>{{vendor.state}}</td>
        <td>{{vendor.phone}}</td>
        <td>{{vendor.email}}</td>
        <td>{{vendor.owner_name}}</td>
        <td>{{vendor.credit_allowance}}</td>
        <td>{{vendor.last_order}}</td>
        <td>{{vendor.image}}</td>

        <td class="td_action">
          <i
            class="fas fa-trash-alt"
            @click="deleteVendorItem(vendor.id) in all_vendors"
          ></i>
        </td>
      </tr>
    </table>
    <router-link :to="{path: 'media_library'}">
      <button style="margin-bottom: 30px;"
              @submit.prevent="submitCustomInfo"
              class="btn btn-lg btn-primary">
        Continue
      </button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'VendorList',
  data () {
    return {
      all_vendors: null
    }
  },
  async created () {
    await this.GetVendorList()
  },
  methods: {
    GetVendorList: function () {
      axios.get('http://127.0.0.1:8000/api/acc-vendor/').then((response) => {
        this.all_vendors = response.data.results
        console.log('ALLDATA##', this.all_vendors)
        console.log(response.status)
      })
    },

    deleteVendorItem: function (id) {
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
          axios.delete('http://127.0.0.1:8000/api/acc-vendor/' + id + '/').then((response) => {
            if (response.status === 204) {
              this.GetVendorList()
            }
          })
          Swal.fire(
            'Deleted!',
            'Your Vendor has been deleted!!',
            'success'
          )
        } else {
          Swal.fire(
            'Cancelled',
            'Your Vendor has not been deleted !',
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
