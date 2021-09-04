<template>
  <div v-if="all_order_merchandise">
    <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
          <h3 style="font-weight: bold" class="text-primary">Order Merchandise List</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/create-order-merchandiser'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px; margin-right: 20px">
                <span class="fas fa-plus"></span> Create Order Merchandise
              </button>
            </a>
          </router-link>
        </div>
      </div>
    <table class="table table-hover">
      <thead class="tableHeader">
      <tr>
        <th scope="col">SL</th>
        <th scope="col">Quantity</th>
        <th scope="col">Delivery Date</th>
        <th scope="col">Delivery Time</th>
        <th scope="col">Vendor Name</th>
        <th scope="col">Address</th>
        <th scope="col">city</th>
        <th scope="col">State</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Product</th>
        <th scope="col">Brand</th>
        <th scope="col">Type</th>
        <th scope="col">Quantity</th>
      </tr>
      </thead>

      <tr
        class="tableRow"
        v-for="(order, SL) in all_order_merchandise" :key="order">
        <td>{{SL+1}}</td>
        <td>{{order.quantity}}</td>
        <td>{{order.delivery_date}}</td>
        <td>{{order.delivery_time}}</td>
        <td v-if="order.acc_vendor">{{order.acc_vendor.vendor_name}}</td>
        <td>{{order.acc_vendor.vendor_id}}</td>
        <td>{{order.acc_vendor.address}}</td>
        <td>{{order.acc_vendor.state}}</td>
        <td>{{order.acc_vendor.phone}}</td>
        <td>{{order.acc_vendor.email}}</td>
        <td>{{order.cm.product}}</td>
        <td>{{order.cm.brand}}</td>
        <td>{{order.cm.type}}</td>
        <td>{{order.cm.quantity}}</td>

        <td class="td_action">
          <i
            class="fas fa-trash-alt"
            @click="deleteOrderMerchandiseItem(order.id) in all_order_merchandise"
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
  name: 'OrderMerchandiseList',
  data () {
    return {
      all_order_merchandise: null
    }
  },
  async created () {
    await this.GetOrderMerchandiseList()
  },
  methods: {
    GetOrderMerchandiseList: function () {
      axios.get('http://127.0.0.1:8000/api/order-merchandise/').then((response) => {
        this.all_order_merchandise = response.data.results
        console.log('AQWERT##', this.all_order_merchandise)
        console.log(response.status)
      })
    },

    deleteOrderMerchandiseItem: function (id) {
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
          axios.delete('http://127.0.0.1:8000/api/order-merchandise/' + id + '/').then((response) => {
            if (response.status === 204) {
              this.GetOrderMerchandiseList()
            }
          })
          Swal.fire(
            'Deleted!',
            'Your Order Merchandise has been deleted!!',
            'success'
          )
        } else {
          Swal.fire(
            'Cancelled',
            'Your Order Merchandise has not been deleted !',
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
