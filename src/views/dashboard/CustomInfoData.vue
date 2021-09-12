<template>
  <div v-if="all_custom_info_data">
    <table class="table table-hover">
      <thead class="tableHeader">
      <tr>
        <!--        <th scope="col">SL</th>-->
        <th scope="col" class="table-success">License</th>
        <th scope="col" class="table-success">Product Types</th>
        <th scope="col" class="table-success">Flower Types</th>
        <th scope="col" class="table-success">Grow method</th>
        <th scope="col" class="table-success">Nutrients used</th>
        <th scope="col" class="table-success">Trim method</th>
        <th scope="col" class="table-success">Curing time</th>
        <th scope="col" class="table-success">Growing Location</th>
      </tr>
      <tr
        class="tableRow"
        v-for="custom_info in all_custom_info_data"
        :key="custom_info">
        <!--        <td>{{SL+1}}</td>-->
        <td>{{custom_info.license}}</td>
        <td>{{custom_info.product_type}}</td>
        <td>{{custom_info.flower_type}}</td>
        <td>{{custom_info.grow_method}}</td>
        <td>{{custom_info.nutrients_used}}</td>
        <td>{{custom_info.trim_method}}</td>
        <td>{{custom_info.curing_time}}</td>
        <td>{{custom_info.growing_location}}</td>
      </tr>
      <tr>
        <th scope="col" class="table-success">Brand Headquarters</th>
        <th scope="col" class="table-success">Website URL</th>
        <th scope="col" class="table-success">Instagram</th>
        <th scope="col" class="table-success">Contact</th>
        <th scope="col" class="table-success">Brand History</th>
        <th scope="col" class="table-success">Flower Quality</th>
        <th scope="col" class="table-success">Price</th>
        <th scope="col" class="table-success">Notes</th>
      </tr>
      </thead>
      <tr class="tableRow"
          v-for="(custom_info) in all_custom_info_data"
          :key="custom_info">
        <td>{{custom_info.brand_headquarters}}</td>
        <td>{{custom_info.website_url}}</td>
        <td>{{custom_info.instagram}}</td>
        <td>{{custom_info.point_of_contact}}</td>
        <td>{{custom_info.brand_history_and_mission}}</td>
        <td>{{custom_info.flower_quality}}</td>
        <td>{{custom_info.price_point}}</td>
        <td>{{custom_info.notes}}</td>
      </tr>
    </table>

    <router-link :to="{path: 'registration'}">
      <button class="btn btn-lg btn-success mt-4">Registration</button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
// import Swal from 'sweetalert2'

export default {
  name: 'CustomInfoData',
  data () {
    return {
      all_custom_info_data: null
    }
  },
  async created () {
    await this.GetCustomInfoDataList()
  },
  methods: {
    GetCustomInfoDataList: function () {
      // axios.get('http://127.0.0.1:8000/api/custom-info/').then((response) => {
      axios.get('http://127.0.0.1:8000/api/custom-info/').then((response) => {
        this.all_custom_info_data = response.data
        console.log('ALLDATA##', this.all_custom_info_data)
        console.log(response.status)
      })
    }
  }
}
</script>

<style scoped>
</style>
