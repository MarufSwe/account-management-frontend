<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
            <h3 style="font-weight: bold" class="text-primary">Report Create Form</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/report-list'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px">
                <span class="fas fa-list"></span> Report List
              </button>
            </a>
          </router-link>
        </div>
      </div>
      <hr style="height:3px;border-width:0;color:blue;background-color:blue">

      <!-- previous form -->
      <form @submit.prevent="submitReportForm" autocomplete="off">
        <div class="form-group">
          <div class="form-row">

            <!--Brand-->
            <div class="col-md-4">
              <div class="position-relative form-group">
                <label>
                  Brand
                </label>
                <input
                  v-model="brand"
                  type="text"
                  class="form-control"
                  placeholder="name"
                />
              </div>
            </div>

            <!--Product Location-->
            <div class="col-md-4">
              <label>Product Location</label>
              <input
                id="department_code"
                v-model="product_location"
                type="text"
                class="form-control"
                placeholder="address"
              />
            </div>

          <!-- Brand Exposure-->
            <div class="col-md-4">
              <label>Brand Exposure</label>
              <select
                name="select"
                id="leave-status"
                v-model="brand_exposure"
                type="boolean"
                class="form-control">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <!-- Brand Visibility-->
            <div class="col-md-6 mt-3">
              <label>Brand Visibility</label>
              <select
                name="select"
                id="product_visibility-status"
                v-model="product_visibility"
                type="boolean"
                class="form-control">
                <option value="1">Yes</option>
                <option value="0">No</option>
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
                    @submit.prevent="submitReportForm"
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
  name: 'ReportCreate',
  data () {
    return {

      all_vendors: null,

      // POST API data
      brand: null,
      product_location: null,
      brand_exposure: null,
      product_visibility: null,
      acc_vendor: null

    }
  },
  created () {
    this.LoadVendor()
  },
  methods: {
    LoadVendor: function () {
      axios.get('http://127.0.0.1:8000/api/acc-vendor/').then((response) => {
        this.all_vendors = response.data.results
        console.log('Vendorrrrrrr##', this.all_vendors)
        console.log(response.status)
      })
    },

    async submitReportForm () {
      const bodyParameters = {
        brand: this.brand,
        product_location: this.product_location,
        brand_exposure: this.brand_exposure,
        product_visibility: this.product_visibility,
        acc_vendor: this.acc_vendor
      }
      axios.post('http://127.0.0.1:8000/api/create-report/',
        bodyParameters)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            text: 'Report Create Successfully!'
          }).then((result) => {
            // this.$router.go()
            this.$router.push('report-list')
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
