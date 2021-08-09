<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
            <h3 style="font-weight: bold" class="text-primary">Schedule Education Create Form</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/education-list'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px">
                <span class="fas fa-list"></span> Education List
              </button>
            </a>
          </router-link>
        </div>
      </div>
      <hr style="height:3px;border-width:0;color:blue;background-color:blue">

      <!-- previous form -->
      <form @submit.prevent="submitScheduleEducation" autocomplete="off">
        <div class="form-group">
          <div class="form-row">

            <!--Name-->
            <div class="col-md-4">
              <div class="position-relative form-group">
                <label>
                  Name
                  <span style="color:red">*</span>
                </label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  placeholder="name"
                />
              </div>
            </div>

            <!--Address-->
            <div class="col-md-4">
              <label>Address</label>
              <input
                id="department_code"
                v-model="address"
                type="text"
                class="form-control"
                placeholder="address"
              />
            </div>

            <!--Phone-->
            <div class="col-md-4">
              <label>Phone</label>
              <input
                v-model="phone"
                type="text"
                class="form-control"
                placeholder="phone"
              />
            </div>

            <!--Email-->
            <div class="col-md-4 mt-3">
              <label>Email</label>
              <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="email"
              />
            </div>

            <!--Brand-->
            <div class="col-md-4 mt-3">
              <label>Brand</label>
              <input
                v-model="brand"
                type="text"
                class="form-control"
                placeholder="brand"
              />
            </div>

            <!--Hours-->
            <div class="col-md-4 mt-3">
              <label>Hours</label>
              <input
                v-model="no_of_hours"
                type="text"
                class="form-control"
                placeholder="hours"
              />
            </div>

            <!--Date-->
            <div class="col-md-6 mt-4">
              <label>Date</label>
              <input
                v-model="date_time"
                type="date"
                class="form-control"
              />
            </div>

            <!--Vendor-->
            <div class="col-md-6 mt-4">
              <label>Vendor</label>
              <select
                name="select[]"
                v-model="acc_vendor"
                type="text"
                class="form-control"
              >
                <option value selected>select vendor</option>
                <option v-for="vendor in all_vendors" :key="vendor.id">
                  {{ vendor.vendor_name }}
                </option>
              </select>
            </div>

          </div>

          <div class="form-group mt-4">
            <button style="margin-bottom: 30px;"
                    @submit.prevent="submitScheduleEducation"
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
  name: 'EducationCreate',
  data () {
    return {

      all_vendors: null,

      // POST API data
      name: null,
      address: null,
      phone: null,
      email: null,
      brand: null,
      date_time: null,
      no_of_hours: null,
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

    async submitScheduleEducation () {
      const bodyParameters = {
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
        brand: this.brand,
        date_time: this.date_time,
        no_of_hours: this.no_of_hours,
        acc_vendor: this.acc_vendor
      }
      axios.post('http://127.0.0.1:8000/api/education/',
        bodyParameters)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            text: 'Education Added Successfully!'
          }).then((result) => {
            // this.$router.go()
            this.$router.push('education-list')
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
