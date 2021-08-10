<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link :to="{path: 'home'}">
            <h3 style="font-weight: bold" class="text-primary">Merchandiser Create Form</h3>
          </router-link>
        </div>

        <div class="col-6">
          <router-link :to="{path: '/merchandiser-list'}">
            <a class="float" style="position: absolute; right: 0">
              <button type="button" class="btn btn-primary" style="font-size: 15px">
                <span class="fas fa-list"></span> Merchandiser List
              </button>
            </a>
          </router-link>
        </div>
      </div>
      <hr style="height:3px;border-width:0;color:blue;background-color:blue">

      <!-- previous form -->
      <form @submit.prevent="submitMerchandiseForm" autocomplete="off">
        <div class="form-group">
          <div class="form-row">

            <!--Product-->
            <div class="col-md-4">
              <div class="position-relative form-group">
                <label>
                  Product
                </label>
                <input
                  v-model="product"
                  type="text"
                  class="form-control"
                  placeholder="product"
                />
              </div>
            </div>

            <!--Brand-->
            <div class="col-md-4">
              <label>Brand</label>
              <input
                id="department_code"
                v-model="brand"
                type="text"
                class="form-control"
                placeholder="brand"
              />
            </div>

            <!--type-->
            <div class="col-md-4">
              <div class="position-relative form-group">
                <label>Type</label>
                <input
                  v-model="type"
                  type="text"
                  class="form-control"
                  placeholder="type"
                />
              </div>
            </div>

            <!--description-->
            <div class="col-md-6">
              <div class="position-relative form-group">
                <label>Description</label>
                <input
                  v-model="description"
                  type="text"
                  class="form-control"
                  placeholder="description"
                />
              </div>
            </div>

            <!--quantity-->
            <div class="col-md-6">
              <div class="position-relative form-group">
                <label>Quantity</label>
                <input
                  v-model="quantity"
                  type="text"
                  class="form-control"
                  placeholder="quantity"
                />
              </div>
            </div>
          </div>

          <div class="form-group mt-4">
            <button style="margin-bottom: 30px;"
                    @submit.prevent="submitMerchandiseForm"
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
  name: 'MerchandiserCreate',
  data () {
    return {

      // POST API data
      product: null,
      brand: null,
      type: null,
      description: null,
      quantity: null

    }
  },
  methods: {
    async submitMerchandiseForm () {
      const bodyParameters = {
        product: this.product,
        brand: this.brand,
        type: this.type,
        description: this.description,
        quantity: this.quantity
      }
      axios.post('http://127.0.0.1:8000/api/merchandise/',
        bodyParameters)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            text: 'Merchandise Create Successfully!'
          }).then((result) => {
            // this.$router.go()
            this.$router.push('merchandiser-list')
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
