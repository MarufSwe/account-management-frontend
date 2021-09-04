<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
            <h3 style="font-weight: bold" class="text-primary">Order Merchandise Create Form</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/order-merchandiser-list'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px">
                <span class="fas fa-list"></span> Order Merchandise List
              </button>
            </a>
          </router-link>
        </div>
      </div>
      <hr style="height:3px;border-width:0;color:blue;background-color:blue">

      <!-- previous form -->
      <form @submit.prevent="submitOrderMerchandise" autocomplete="off">
        <div class="form-group">
          <div class="form-row">

            <!--Quantity-->
            <div class="col-md-4 mt-3">
              <div class="position-relative form-group">
                <label>
                  Quantity
                </label>
                <input
                  v-model="quantity"
                  type="text"
                  class="form-control"
                  placeholder="quantity"
                />
              </div>
            </div>

            <!--delivery_date-->
            <div class="col-md-4 mt-3">
              <label>Delivery Date</label>
              <input
                v-model="delivery_date"
                type="date"
                class="form-control"
              />
            </div>

         <!--delivery_time-->
            <div class="col-md-4 mt-3">
              <label>Delivery Time</label>
              <select
                name="select"
                id="product_visibility-status"
                v-model="delivery_time"
                type="boolean"
                class="form-control">
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
              </select>
            </div>

            <!--Merchandise-->
            <div class="col-md-6 mt-3">
              <label>Merchandise</label>
              <select
                name="select[]"
                v-model="cm"
                type="text"
                class="form-control"
              >
                <option value selected>select Merchandise</option>
                <option v-for="merchandise in all_merchandise"
                        :key="merchandise.id"
                        :value="merchandise.id">
                  {{ merchandise.product }}
                </option>
              </select>
            </div>

            <!--Vendor-->
            <div class="col-md-6 mt-3">
              <label>Vendor</label>
              <select
                name="select[]"
                v-model="acc_vendor"
                type="text"
                class="form-control"
              >
                <option value selected>select vendor</option>
                <option v-for="vendor in all_vendors"
                        :key="vendor.id"
                        :value="vendor.id">
                  {{ vendor.vendor_name }}
                </option>
              </select>
            </div>

          </div>

          <div class="form-group mt-4">
            <button style="margin-bottom: 30px;"
                    @submit.prevent="submitOrderMerchandise"
                    class="btn btn-lg btn-primary float-right"
            >Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'CreateOrderMerchan',
  data () {
    return {

      all_merchandise: null,
      all_vendors: null,

      // POST API data
      quantity: null,
      delivery_date: null,
      delivery_time: null,
      cm: null,
      acc_vendor: null

    }
  },
  created () {
    this.LoadVendor()
    this.LoadMerchandise()
  },
  methods: {

    LoadMerchandise: function () {
      axios.get('http://127.0.0.1:8000/api/merchandise/').then((response) => {
        this.all_merchandise = response.data.results
        console.log('Vendorrrrrrr##', this.all_merchandise)
        console.log(response.status)
      })
    },

    LoadVendor: function () {
      axios.get('http://127.0.0.1:8000/api/acc-vendor/').then((response) => {
        this.all_vendors = response.data.results
        console.log('Vendorrrrrrr##', this.all_vendors)
        console.log(response.status)
      })
    },

    async submitOrderMerchandise () {
      const bodyParameters = {
        quantity: this.quantity,
        delivery_date: this.delivery_date,
        delivery_time: this.delivery_time,
        cm: this.cm,
        acc_vendor: this.acc_vendor
      }
      axios.post('http://127.0.0.1:8000/api/order-merchandise/',
        bodyParameters)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            text: 'Order Merchandise Create Successfully!'
          }).then((result) => {
            // this.$router.go()
            this.$router.push('order-merchandiser-list')
            console.log(result)
          })
          console.log(response)
        })
        .catch((error) => {
          this.field_validation_data = error.response.data
          console.log('--++', error.response)
        })
    }
  }
}
</script>

<style scoped>
</style>
