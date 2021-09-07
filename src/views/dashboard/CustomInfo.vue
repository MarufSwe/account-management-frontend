<template>
  <body>
  <section class="main">
    <!--Navbar start from here-->
    <nav
      class="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../dashboard/images/bg205.png" alt="MISS">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav ms-auto px-5 mx-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
            <li class="nav-item ms-5">
              <button style="margin-bottom: 30px; margin-left: 30px"
                      @submit.prevent="submitVendor"
                      class="btn btn-lg btn-primary float-right"
              >Contact Us
              </button>
            </li>
          </ul>
        </div>
        <!--Close menubar-->
      </div>
    </nav>
  </section>
  <!--Close header section-->

  <div class="container">
    <form @submit.prevent="submitCustomInfo" autocomplete="off">
      <h4 class="mt-2">Answering as much as possible provides for a faster turnaround.</h4>
      <section class="mt-5">

        <!--License Start-->
        <div class="col-md-6 mb-2" style="margin-left: -15px;">
          <label><h5>License#</h5></label>
          <input
            v-model="license"
            type="text"
            class="form-control"
            placeholder="license"
          />
        </div>
        <!--License End-->

        <!--Product Types Start-->
        <div class="Product Types mt-3">
          <h5>Product Types:</h5>
          <input type="checkbox" id="jack" value="Flower" v-model="product_type" style="margin-right: 3px;">
          <label for="jack" style="margin-right: 10px;">Flower</label>

          <input type="checkbox" id="john" value="Concentrate" v-model="product_type" style="margin-right: 3px;">
          <label for="john" style="margin-right: 10px;">Concentrate</label>

          <input type="checkbox" id="Edibles" value="Edibles" v-model="product_type" style="margin-right: 3px;">
          <label for="mike" style="margin-right: 10px;">Edibles</label>

          <input type="checkbox" id="Tinctures" value="Tinctures" v-model="product_type" style="margin-right: 3px;">
          <label for="mike" style="margin-right: 10px;">Tinctures</label>

          <input type="checkbox" id="Vape" value="Vape" v-model="product_type" style="margin-right: 3px;">
          <label for="mike" style="margin-right: 10px;">Vape</label>

          <input type="checkbox" id="PreRolls" value="PreRolls" v-model="product_type" style="margin-right: 3px;">
          <label for="mike">Pre Rolls</label>
        </div>
        <!--Product Types End-->

        <!--Flower Types Start-->
        <div class="Product Types mt-3">
          <h5>Flower Type:</h5>
          <input type="checkbox" id="Indoor" value="Indoor" v-model="flower_type" style="margin-right: 3px;">
          <label for="jack" style="margin-right: 10px;">Indoor</label>

          <input type="checkbox" id="Outdoor" value="Outdoor" v-model="flower_type" style="margin-right: 3px;">
          <label for="john" style="margin-right: 10px;">Outdoor</label>

          <input type="checkbox" id="Greenhouse" value="Greenhouse" v-model="flower_type" style="margin-right: 3px;">
          <label for="mike" style="margin-right: 10px;">Greenhouse</label>
        </div>
        <!--Flower Types End-->

        <!--Grow method: Start-->
        <div class="Product Types mt-3">
          <h5>Grow method:</h5>
          <input type="checkbox" id="OrganicSoil" value="OrganicSoil" v-model="grow_method" style="margin-right: 3px;">
          <label for="jack" style="margin-right: 10px;">Organic Soil</label>

          <input type="checkbox" id="Soil" value="Soil" v-model="grow_method" style="margin-right: 3px;">
          <label for="john" style="margin-right: 10px;">Soil</label>

          <input type="checkbox" id="Hydroponic" value="Hydroponic" v-model="grow_method" style="margin-right: 3px;">
          <label for="mike" style="margin-right: 10px;">Hydroponic</label>

          <input type="checkbox" id="OrganicHydroponic" value="OrganicHydroponic" v-model="grow_method"
                 style="margin-right: 3px;">
          <label for="mike" style="margin-right: 10px;">Organic Hydroponic</label>
        </div>
        <!--Grow method: End-->

        <!--Nutrients used Start-->
        <div class="nutrients-used mt-3">
          <h5>Nutrients used:</h5>
          <textarea id="w3review" name="w3review" rows="4" cols="50" v-model="nutrients_used"></textarea>
        </div>
        <!--Nutrients used End-->

        <!--Trim method Start-->
        <div class="Product Types mt-3">
          <h5>Trim method:</h5>
          <input type="checkbox" id="DryTrim" value="DryTrim" v-model="trim_method" style="margin-right: 3px;">
          <label for="jack" style="margin-right: 10px;">Dry Trim</label>

          <input type="checkbox" id="WetTrim" value="WetTrim" v-model="trim_method" style="margin-right: 3px;">
          <label for="john" style="margin-right: 10px;">Wet Trim</label>
        </div>
        <!--Trim method End-->

        <!--Input Filed Start-->
        <div class="form-group">
          <!--Curing & Growing-->
          <div class="form-row  mt-3">
            <!--Curing time-->
            <div class="col-md-3">
              <h5>Curing time (In days)</h5>
              <input
                v-model="curing_time"
                type="text"
                class="form-control"
                placeholder="outstanding credit"
              />
            </div>

            <!--Growing Location-->
            <div class="col-md-3">
              <h5>Growing Location (city)</h5>
              <input
                v-model="growing_location"
                type="text"
                class="form-control"
                placeholder="outstanding credit"
              />
            </div>
          </div>

          <!--Brand Headquarters & Website URL-->
          <div class="form-row  mt-3">
            <div class="col-md-3">
              <h5>Brand Headquarters(city):</h5>
              <input
                v-model="brand_headquarters"
                type="text"
                class="form-control"
                placeholder="outstanding credit"
              />
            </div>

            <div class="col-md-3">
              <h5>Website URL</h5>
              <input
                v-model="website_url"
                type="text"
                class="form-control"
                placeholder="outstanding credit"
              />
            </div>
          </div>

          <!--Instagram & Point of Contact-->
          <div class="form-row  mt-3">
            <div class="col-md-3">
              <h5>Instagram:</h5>
              <input
                v-model="instagram"
                type="text"
                class="form-control"
                placeholder="outstanding credit"
              />
            </div>

            <div class="col-md-3">
              <h5>Point of Contact:</h5>
              <input
                v-model="point_of_contact"
                type="text"
                class="form-control"
                placeholder="outstanding credit"
              />
            </div>
          </div>
        </div>
        <!--Input Filed End-->

        <!--Brand History Start-->
        <div class="col-md-6 mb-2" style="margin-left: -15px;">
          <label><h5>Brand History and Mission:</h5></label>
          <input
            v-model="brand_history_and_mission"
            type="text"
            class="form-control"
            placeholder="brand history and mission"
          />
        </div>
        <!--Brand History End-->

        <!--Flower Quality Start-->
        <div class="Product Types mt-3">
          <h5>Flower Quality:</h5>
          <input type="checkbox" id="HighEnd" value="HighEnd" v-model="flower_quality" style="margin-right: 3px;">
          <label for="jack" style="margin-right: 10px;">High End</label>

          <input type="checkbox" id="MiddleGrade" value="MiddleGrade" v-model="flower_quality" style="margin-right: 3px;">
          <label for="john" style="margin-right: 10px;">Middle Grade</label>
        </div>
        <!--Flower Quality End-->

        <!--Price point: Start-->
        <div class="Product Types mt-3">
          <h5>Price point:</h5>
          <input type="checkbox" id="High" value="High" v-model="price_point" style="margin-right: 3px;">
          <label for="jack" style="margin-right: 10px;">High</label>

          <input type="checkbox" id="Average" value="Average" v-model="price_point" style="margin-right: 3px;">
          <label for="john" style="margin-right: 10px;">Average</label>

          <input type="checkbox" id="Discounted" value="Discounted" v-model="price_point" style="margin-right: 3px;">
          <label for="mike" style="margin-right: 10px;">Discounted</label>
        </div>
        <!--Price point: End-->

        <!--Notes Start-->
        <div class="nutrients-used mt-3">
          <h5>Notes:</h5>
          <textarea name="w3review" rows="4" cols="50" v-model="notes"></textarea>
        </div>
        <!--Notes End-->

        <button style="margin-bottom: 30px;"
                @submit.prevent="submitCustomInfo"
                class="btn btn-lg btn-primary">
          Continue
        </button>

      </section>
    </form>
  </div>

  <!--Close Section 7 section-->
  <section class="s8 container-fluid" id="footer_bg">
    <div class="container py-4 text-start" id="footer1">
      <div class="row justify-content-between">
        <div class="col-12 col-md-4 col-sm-8">
          <img src="../dashboard/images/logo1.png" alt=""/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis, itaque! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Animi ut quod nesciunt illo rerum impedit
            dolorum harum! Assumenda, delectus omnis.
          </p>
          <div class="social-icon py-2">
            <img src="../dashboard/images/insta.png" alt=""/>
            <img src="../dashboard/images/twitter2.png" alt=""/>
            <img src="../dashboard/images/yt2.png" alt=""/>
          </div>
        </div>
        <!--Close 1st col-->
        <div class="col-12 col-md-3 col-sm-4 py-4 lh-4">
          <h4>Userful Link</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Product</li>
          </ul>
        </div>
        <!--Close 2nd col-->
        <div class="col-12 col-md-3 col-sm-4 py-4 lh-4">
          <h4>Legal</h4>
          <ul>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <!--Close 3rd col-->
      </div>
      <!--Close row-->
      <div
        class="row justify-content-between pt-3 border-secondary border-top"
      >
        <div class="col-12 col-md-6 sm-8">
          <p>© 2020-2021 Cannabis Footprint-All Rights Reserved</p>
        </div>
        <div class="col-12 col-md-3 col-sm-4">
          <img src="../dashboard/images/master card.png" alt=""/>
          <img src="../dashboard/images/visa.png" alt=""/>
          <img src="../dashboard/images/Ae.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
  <!--Close Section 6 section-->
  </body>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'CustomInfo',
  data () {
    return {

      // POST API data
      license: null,
      // product_type: null,
      product_type: [],
      flower_type: [],
      grow_method: [],
      nutrients_used: null,
      trim_method: [],
      curing_time: null,
      growing_location: null,
      brand_headquarters: null,
      website_url: null,
      instagram: null,
      point_of_contact: null,
      brand_history_and_mission: null,
      flower_quality: [],
      price_point: [],
      notes: null

    }
  },
  methods: {
    async submitCustomInfo () {
      const bodyParameters = {
        license: this.license,
        product_type: this.product_type,
        flower_type: this.flower_type,
        grow_method: this.grow_method,
        nutrients_used: this.nutrients_used,
        trim_method: this.trim_method,
        curing_time: this.curing_time,
        growing_location: this.growing_location,
        brand_headquarters: this.brand_headquarters,
        instagram: this.instagram,
        point_of_contact: this.point_of_contact,
        brand_history_and_mission: this.brand_history_and_mission,
        flower_quality: this.flower_quality,
        price_point: this.price_point,
        notes: this.notes

      }
      axios.post('http://127.0.0.1:8000/api/custom-info/',
        bodyParameters)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            text: 'Info Added Successfully!'
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
  .navbar-brand img {
    width: 70px;
    height: 70px;
  }

  #card12 {
    justify-content: center;
  }

  #card12 a {
    border-radius: 30px;
    padding: 8px;
    text-decoration: none;
  }

  #card12 img {
    height: 100px;
    width: 100px;
  }

  #s7 {
    background-image: url(/images/Group224.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  #footer_bg {
    background-color: rgb(210, 242, 248);
  }

  #footer_bg ul li {
    list-style: none;
  }

</style>
