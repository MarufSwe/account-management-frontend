<template>
  <div v-if="all_merchandiser">
    <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
          <h3 style="font-weight: bold" class="text-primary">Merchandiser List</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/create-merchandiser'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px; margin-right: 20px">
                <span class="fas fa-plus"></span> Create Merchandiser
              </button>
            </a>
          </router-link>
        </div>
      </div>
    <table class="table table-hover">
      <thead class="tableHeader">
      <tr>
        <th scope="col">SL</th>
        <th scope="col">Product</th>
        <th scope="col">Brand</th>
        <th scope="col">Type</th>
        <th scope="col">Description</th>
        <th scope="col">Quantity</th>
      </tr>
      </thead>

      <tr
        class="tableRow"
        v-for="(merchandiser, SL) in all_merchandiser"
        :key="merchandiser">
        <td>{{SL+1}}</td>
        <td>{{merchandiser.product}}</td>
        <td>{{merchandiser.brand}}</td>
        <td>{{merchandiser.type}}</td>
        <td>{{merchandiser.description}}</td>
        <td>{{merchandiser.quantity}}</td>

        <td class="td_action">
          <i
            class="fas fa-trash-alt"
            @click="deleteMerchandiserItem(merchandiser.id) in all_merchandiser"
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
  name: 'MerchandiserList',
  data () {
    return {
      all_merchandiser: null
    }
  },
  async created () {
    await this.GetMerchandiserList()
  },
  methods: {
    GetMerchandiserList: function () {
      axios.get('http://127.0.0.1:8000/api/merchandise/').then((response) => {
        this.all_merchandiser = response.data.results
        console.log('ALLDATA##', this.all_merchandiser)
        console.log(response.status)
      })
    },

    deleteMerchandiserItem: function (id) {
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
          axios.delete('http://127.0.0.1:8000/api/merchandise/' + id + '/').then((response) => {
            if (response.status === 204) {
              this.GetMerchandiserList()
            }
          })
          Swal.fire(
            'Deleted!',
            'Your Merchandise has been deleted!!',
            'success'
          )
        } else {
          Swal.fire(
            'Cancelled',
            'Your Merchandise has not been deleted !',
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
