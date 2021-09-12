<template>
  <body>
  <div class="signup-form">
    <form @submit.prevent="submitLoginForm">
      <h2>Login</h2>
      <hr>
      <!--User Name-->
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
          </div>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Username"
            required="required"
            v-model="username"
            :class="{'is-invalid':designation_error_data && designation_error_data.username}"
          />
          <!--error handling-->
          <div
            :class="{'invalid-feedback':designation_error_data && designation_error_data.username}"
            v-if="designation_error_data && designation_error_data.username"
          >{{designation_error_data.username}}
          </div>
        </div>
      </div>

      <!--Password-->
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
          </div>
          <input type="text" class="form-control" name="password" placeholder="Password" required="required"
                 v-model="password">
        </div>
      </div>
      <div class="form-group">
        <button style="margin-bottom: 30px;"
                @submit.prevent="submitLoginForm"
                class="btn btn-lg btn-primary">
          Login
        </button>
      </div>
    </form>
    <!--    <div class="text-center">Already have an account? <a href="#">Login here</a></div>-->
  </div>
  </body>
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      username: null,
      password: null,

      designation_error_data: {
        username: null
      }
    }
  },
  methods: {
    async submitLoginForm () {
      const bodyParameters = {
        username: this.username,
        password: this.password

      }
      // axios.post('http://127.0.0.1:8000/api/custom-info/',
      axios.post('http://127.0.0.1:8000/api/login/',
        bodyParameters)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            text: 'Login Successfully!'
          }).then((result) => {
            // this.$router.go()
            this.$router.push('vendor-list')
            console.log(result)
          })
          console.log(response)
        })
        .catch((error) => {
          this.designation_error_data = error.response.data
          console.log('--++', error.response)
        })
    }
  }
}
</script>

<style scoped>
  body {
    color: #fff;
    background: #19aa8d;
    font-family: 'Roboto', sans-serif;
  }

  .form-control {
    font-size: 15px;
  }

  .form-control, .form-control:focus, .input-group-text {
    border-color: #e1e1e1;
  }

  .form-control, .btn {
    border-radius: 3px;
  }

  .signup-form {
    width: 400px;
    margin: 0 auto;
    padding: 30px 0;
  }

  .signup-form form {
    color: #999;
    border-radius: 3px;
    margin-bottom: 15px;
    background: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }

  .signup-form h2 {
    color: #333;
    font-weight: bold;
    margin-top: 0;
  }

  .signup-form hr {
    margin: 0 -30px 20px;
  }

  .signup-form .form-group {
    margin-bottom: 20px;
  }

  .signup-form label {
    font-weight: normal;
    font-size: 15px;
  }

  .signup-form .form-control {
    min-height: 38px;
    box-shadow: none !important;
  }

  .signup-form .input-group-addon {
    max-width: 42px;
    text-align: center;
  }

  .signup-form .btn, .signup-form .btn:active {
    font-size: 16px;
    font-weight: bold;
    background: #19aa8d !important;
    border: none;
    min-width: 140px;
  }

  .signup-form .btn:hover, .signup-form .btn:focus {
    background: #179b81 !important;
  }

  .signup-form a {
    color: #fff;
    text-decoration: underline;
  }

  .signup-form a:hover {
    text-decoration: none;
  }

  .signup-form form a {
    color: #19aa8d;
    text-decoration: none;
  }

  .signup-form form a:hover {
    text-decoration: underline;
  }

  .signup-form .fa {
    font-size: 21px;
  }

  .signup-form .fa-paper-plane {
    font-size: 18px;
  }

  .signup-form .fa-check {
    color: #fff;
    left: 17px;
    top: 18px;
    font-size: 7px;
    position: absolute;
  }
</style>
