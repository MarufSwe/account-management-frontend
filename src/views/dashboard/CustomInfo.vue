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
    <h4 class="mt-2">Answering as much as possible provides for a faster turnaround.</h4>
    <section class="mt-5">

      <!--License Start-->
      <div class="col-md-6 mb-2" style="margin-left: -15px;">
        <label><h5>License#</h5></label>
        <input
          v-model="address"
          type="text"
          class="form-control"
          placeholder="license"
        />
      </div>
      <!--License End-->

      <!--Product Types Start-->
      <div class="Product Types mt-3">
        <h5>Product Types:</h5>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">Flower</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Concentrate</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Edibles</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Tinctures</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Vape</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Pre Rolls</label>
        </div>
      </div>
      <!--Product Types End-->

      <!--Flower Types Start-->
      <div class="Product Types mt-3">
        <h5>Flower Type:</h5>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">Indoor</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Outdoor</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Greenhouse</label>
        </div>
      </div>
      <!--Flower Types End-->

      <!--Grow method: Start-->
      <div class="Product Types mt-3">
        <h5>Product Types:</h5>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">Organic Soil</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Soil</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Hydroponic</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option3">
          <label class="form-check-label" for="inlineCheckbox3">Organic Hydroponic</label>
        </div>
      </div>
      <!--Grow method: End-->

      <!--Nutrients used Start-->
      <div class="nutrients-used mt-3">
        <h5>Nutrients used:</h5>
        <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
      </div>
      <!--Nutrients used End-->

      <!--Trim method Start-->
      <div class="Product Types mt-3">
        <h5>Trim method:</h5>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">Dry Trim</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Wet Trim</label>
        </div>
      </div>
      <!--Trim method End-->

      <!--Input Filed Start-->
      <div class="form-group">
        <div class="form-row  mt-3">
          <div class="col-md-3">
            <h5>Curing time (In days)</h5>
            <input
              v-model="outstanding_credit"
              type="text"
              class="form-control"
              placeholder="outstanding credit"
            />
          </div>

          <div class="col-md-3">
            <h5>Growing Location (city)</h5>
            <input
              v-model="outstanding_credit"
              type="text"
              class="form-control"
              placeholder="outstanding credit"
            />
          </div>
        </div>

        <div class="form-row  mt-3">
          <div class="col-md-3">
            <h5>Brand Headquarters(city):</h5>
            <input
              v-model="outstanding_credit"
              type="text"
              class="form-control"
              placeholder="outstanding credit"
            />
          </div>

          <div class="col-md-3">
            <h5>Website URL</h5>
            <input
              v-model="outstanding_credit"
              type="text"
              class="form-control"
              placeholder="outstanding credit"
            />
          </div>
        </div>

        <div class="form-row  mt-3">
          <div class="col-md-3">
            <h5>Instagram:</h5>
            <input
              v-model="outstanding_credit"
              type="text"
              class="form-control"
              placeholder="outstanding credit"
            />
          </div>

          <div class="col-md-3">
            <h5>Point of Contact:</h5>
            <input
              v-model="outstanding_credit"
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
          v-model="address"
          type="text"
          class="form-control"
          placeholder="brand history and mission"
        />
      </div>
      <!--Brand History End-->

      <!--Flower Quality Start-->
      <div class="Product Types mt-3">
        <h5>Flower Quality:</h5>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">High End</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Middle Grade</label>
        </div>
      </div>
      <!--Flower Quality End-->

      <!--Price point: Start-->
      <div class="Product Types mt-3">
        <h5>Price point::</h5>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">High</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Average</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">Discounted</label>
        </div>
      </div>
      <!--Price point: End-->

      <!--Notes Start-->
      <div class="nutrients-used mt-3">
        <h5>Notes:</h5>
        <textarea name="w3review" rows="4" cols="50"></textarea>
      </div>
      <!--Notes End-->

      <button style="margin-bottom: 30px;"
        @submit.prevent="submitVendor"
        class="btn btn-lg btn-primary">
        Continue
      </button>

    </section>
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
export default {
  name: 'CustomInfo'
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
