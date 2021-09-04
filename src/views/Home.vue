<template>
  <div class="home">
<!--    <router-link to="/vendor">Vendor</router-link>-->
<!--    |-->
<!--    <router-link to="/education">Education</router-link>-->

    <h2 style="margin-bottom: -40px; color: blue">Account Management</h2>
    <!--card design start-->
    <div class="box">
      <div class="container">
        <div class="row">

          <div class="col-lg-3">
            <router-link to="report-list">
              <div class="box-part text-center">
                <i class="fab fa-wpforms fa-3x" aria-hidden="true" style="color:blue"></i>
                <div class="title">
                  <h4>Report Form</h4>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-lg-3">
            <router-link to="education-list">
              <div class="box-part text-center">
                <i class="fas fa-book-reader fa-3x" aria-hidden="true" style="color:blue"></i>
                <div class="title">
                  <h4>Schedule Education</h4>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-lg-3">
            <div class="box-part text-center">
              <i class="fas fa-truck-moving fa-3x" aria-hidden="true" style="color:blue"></i>
              <div class="title">
                <h4>New Order</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <router-link to="report-sheet-list">
            <div class="box-part text-center">
              <i class="fas fa-sort-amount-up fa-3x" aria-hidden="true" style="color:blue"></i>

              <div class="title">
                <h4>Report Sheet</h4>
              </div>
            </div>
            </router-link>
          </div>

          <div class="col-lg-3">
            <router-link to="merchandiser-list">
            <div class="box-part text-center">
              <i class="fas fa-money-bill-alt fa-3x" aria-hidden="true" style="color:blue"></i>

              <div class="title">
                <h4>Create Merchandise</h4>
              </div>
            </div>
            </router-link>
          </div>

          <div class="col-lg-3">
            <router-link to="order-merchandiser-list">
            <div class="box-part text-center">
              <i class="fas fa-file-invoice-dollar fa-3x" aria-hidden="true" style="color:blue"></i>

              <div class="title">
                <h4>Order Merchandise</h4>
              </div>
            </div>
            </router-link>
          </div>

          <div class="col-lg-3">
            <div class="box-part text-center">
              <i class="fas fa-file-invoice-dollar fa-3x" aria-hidden="true" style="color:blue"></i>

              <div class="title">
                <h4>Schedule Sheet</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <router-link to="/vendor-list">
              <div class="box-part text-center">
                <i class="fas fa-users fa-3x" aria-hidden="true" style="color:blue"></i>
                <div class="title">
                  <h4>Vendor</h4>
                </div>
              </div>
            </router-link>
          </div>

        </div>
      </div>
    </div>
    <!--card design end-->

    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
  body {
    background: #eee;
  }

  span {
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: #0062cc;
    border-bottom: 2px solid #0062cc;
  }

  .box {
    padding: 60px 0px;
  }

  .box-part {
    background: #fff;
    border-radius: 0;
    padding: 60px 10px;
    margin: 30px 0px;
  }

  .text {
    margin: 20px 0px;
  }

  .fa {
    color: #4183d7;
  }
</style>
