import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Vendor from '../views/Vendor.vue'
import VendorList from '../views/VendorList'

// Schedule Education
import EducationList from '../views/schedule_education/EducationList'
import EducationCreate from '../views/schedule_education/EducationCreate'

// Report
import ReportList from '../views/create_report/ReportList'
import ReportCreate from '../views/create_report/ReportCreate'

// ReportSheet
import ReportSheet from '../views/report_sheet/ReportSheet'

// Merchandiser
import MerchandiserList from '../views/merchandiser/MerchandiserList'
import MerchandiserCreate from '../views/merchandiser/MerchandiserCreate'

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
  },

  // Report
  {
    path: '/report-list',
    name: 'ReportList',
    component: ReportList
  },
  {
    path: '/create-report',
    name: 'ReportCreate',
    component: ReportCreate
  },

  // ReportSheet
  {
    path: '/report-sheet-list',
    name: 'ReportSheet',
    component: ReportSheet
  },

  // Merchandiser
  {
    path: '/merchandiser-list',
    name: 'MerchandiserList',
    component: MerchandiserList
  },
  {
    path: '/create-merchandiser',
    name: 'MerchandiserCreate',
    component: MerchandiserCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
