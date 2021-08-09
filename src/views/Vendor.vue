<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
          <h3 style="font-weight: bold" class="text-primary">Vendor Create Form</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/vendor-list'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px">
                <span class="fas fa-list"></span> Vendor List
              </button>
            </a>
          </router-link>
        </div>
      </div>
      <hr style="height:3px;border-width:0;color:blue;background-color:blue">

      <!-- previous form -->
      <form @submit.prevent="submitVendor" autocomplete="off">
        <div class="form-group">
          <div class="form-row">

            <!--Vendor Name-->
            <div class="col-md-4">
              <div class="position-relative form-group">
                <label>
                  Vendor Name
                  <span style="color:red">*</span>
                </label>
                <input
                  v-model="vendor_name"
                  type="text"
                  class="form-control"
                  placeholder="vendor name"
                />
              </div>
            </div>

            <!--Vendor ID-->
            <div class="col-md-4">
              <label >Vendor ID</label>
              <input
                id="department_code"
                v-model="vendor_id"
                type="text"
                class="form-control"
                placeholder="vendor id"
              />
            </div>

            <!--Vendor Address-->
            <div class="col-md-4">
              <label>Address</label>
              <input
                v-model="address"
                type="text"
                class="form-control"
                placeholder="address"
              />
            </div>

            <!--City-->
            <div class="col-md-4">
              <label>City</label>
              <input
                v-model="city"
                type="text"
                class="form-control"
                placeholder="city"
              />
            </div>

            <!--State Dropdown-->
            <div class="col-md-4">
              <label>State</label>
              <select
                name="select"
                id="type"
                v-model="state"
                type="choice"
                class="form-control">

                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattogram</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="barishal">Barishal</option>
                <option value="khulna">Khulna</option>
                <option value="rangpur">Rangpur</option>
                <option value="sylhet">Sylhet</option>
              </select>
            </div>

            <!--Zip code -->
            <div class="col-md-4">
              <label>Zip code</label>
              <input
                v-model="zip_code"
                type="text"
                class="form-control"
                placeholder="zip code"
              />
            </div>

            <!--License-->
            <div class="col-md-4 mt-3">
              <label>License Number</label>
              <input
                v-model="license_no"
                type="text"
                class="form-control"
                placeholder="license number"
              />
            </div>

            <!--Seller Permit-->
            <div class="col-md-4 mt-3">
              <label>Seller Permit</label>
              <input
                v-model="seller_permit"
                type="text"
                class="form-control"
                placeholder="seller permit"
              />
            </div>

            <!--Phone-->
            <div class="col-md-4 mt-3">
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

            <!--Owner Name-->
            <div class="col-md-4 mt-3">
              <label>Owner Name</label>
              <input
                v-model="owner_name"
                type="text"
                class="form-control"
                placeholder="owner name"
              />
            </div>

            <!--Point of Contact-->
            <div class="col-md-4 mt-3">
              <label>Point of Contact</label>
              <input
                v-model="point_of_contact"
                type="text"
                class="form-control"
                placeholder="point of contact"
              />
            </div>

            <!--Instagram -->
            <div class="col-md-4 mt-3">
              <label>Instagram</label>
              <input
                v-model="instagram"
                type="text"
                class="form-control"
                placeholder="instagram"
              />
            </div>

            <!--Credit Allowance-->
            <div class="col-md-4 mt-3">
              <label>Credit Allowance</label>
              <input
                v-model="credit_allowance"
                type="text"
                class="form-control"
                placeholder="credit allowance"
              />
            </div>

            <!--Collections-->
            <div class="col-md-4 mt-3">
              <label>Collections</label>
              <select
                name="select"
                id="leave-status"
                v-model="collection"
                type="boolean"
                class="form-control">
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>

            <!--outstanding_credit-->
            <div class="col-md-6 mt-3">
              <label>Outstanding Credit</label>
              <input
                v-model="outstanding_credit"
                type="text"
                class="form-control"
                placeholder="outstanding credit"
              />
            </div>

            <!--last_order-->
            <div class="col-md-6 mt-3">
              <label>Last Order</label>
              <input
                v-model="last_order"
                type="date"
                class="form-control"
              />
            </div>

          </div>

          <div class="form-group mt-4">
            <button style="margin-bottom: 30px;"
              @submit.prevent="submitVendor"
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
  name: 'CreateVendor',
  data () {
    return {

      // POST API data
      vendor_name: null,
      vendor_id: null,
      address: null,
      city: null,
      state: null,
      zip_code: null,
      license_no: null,
      seller_permit: null,
      phone: null,
      email: null,
      owner_name: null,
      point_of_contact: null,
      instagram: null,
      credit_allowance: null,
      collection: null,
      outstanding_credit: null,
      last_order: null

    }
  },
  methods: {
    async submitVendor () {
      const bodyParameters = {
        vendor_name: this.vendor_name,
        vendor_id: this.vendor_id,
        address: this.address,
        city: this.city,
        state: this.state,
        zip_code: this.zip_code,
        license_no: this.license_no,
        seller_permit: this.seller_permit,
        phone: this.phone,
        email: this.email,
        owner_name: this.owner_name,
        point_of_contact: this.point_of_contact,
        instagram: this.instagram,
        credit_allowance: this.credit_allowance,
        collection: this.collection,
        outstanding_credit: this.outstanding_credit,
        last_order: this.last_order
      }
      axios.post('http://127.0.0.1:8000/api/acc-vendor/',
        bodyParameters)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            text: 'Vendor Added Successfully!'
          }).then((result) => {
            // this.$router.go()
            this.$router.push('vendor-list')
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
