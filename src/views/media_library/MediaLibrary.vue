<template>
  <!--  <div v-if="all_vendors">-->
  <div>
    <h2 style="font-weight: bold">Upload Individual Photo of your Product</h2>
    <hr>

    <input accept="image/*" type='file' id="imgInp"/>
<!--    <img id="blah" src="#" alt="your image"/>-->

    <button style="margin-bottom: 30px;"
            @submit.prevent="submitCustomInfo"
            class="btn btn-lg btn-primary">
      Home
    </button>
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
