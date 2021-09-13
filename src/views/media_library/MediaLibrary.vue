<template>
  <!--  <div v-if="all_vendors">-->
  <div>
    <h2 style="font-weight: bold">Upload Individual Photo of your Product</h2>
    <hr>

    <div class="container">
      <div class="row">
        <div class="col-4 mt-3">
          <label>Image 1</label>
          <input
            class="form-control"
            type="file"
            name="image 1"
            @change="handleImage"
          />
        </div>
        <div class="col-4 mt-3">
          <label>Image 2</label>
          <input
            class="form-control"
            type="file"
            name="image 2"
            @change="handleImage"
          />
        </div>
        <div class="col-4 mt-3">
          <label>Image 3</label>
          <input
            class="form-control"
            type="file"
            name="image 3"
            @change="handleImage"
          />
        </div>
      </div>
    </div>

    <router-link :to="{path: 'home'}">
    <button style="margin-top: 50px;"
            @submit.prevent="submitCustomInfo"
            class="btn btn-lg btn-primary">
      Submit & Home
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
