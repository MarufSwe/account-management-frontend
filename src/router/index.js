import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Vendor from '../views/Vendor.vue'
import VendorList from '../views/VendorList'

// Schedule Education
import EducationList from '../views/schedule_education/EducationList'
import EducationCreate from '../views/schedule_education/EducationCreate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/vendor',
    name: 'Vendor',
    component: Vendor
  },
  {
    path: '/vendor-list',
    name: 'VendorList',
    component: VendorList
  },

  // Education
  {
    path: '/education-list',
    name: 'EducationList',
    component: EducationList
  },
  {
    path: '/create-education',
    name: 'EducationCreate',
    component: EducationCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
