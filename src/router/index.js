import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vendor from '../views/Vendor.vue'
import VendorList from '../views/VendorList'

import MediaLibrary from '../views/media_library/MediaLibrary'

// Dashboard
import Dashboard from '../views/dashboard/Dashboard.vue'
import CustomInfo from '../views/dashboard/CustomInfo'
import CustomInfoData from '../views/dashboard/CustomInfoData'

// Authentication
import Registration from '../views/authentication/Registration'
import Login from '../views/authentication/Login'

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

// Order Merchandise
import CreateOrderMerchan from '../views/order_merchandise/CreateOrderMerchan'
import OrderMerchandiseList from '../views/order_merchandise/OrderMerchandiseList'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/custom-info',
    name: 'CustomInfo',
    component: CustomInfo
  },
  {
    path: '/custom-info-data',
    name: 'CustomInfoData',
    component: CustomInfoData
  },

  // Authentication
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // Main
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/media_library',
    name: 'MediaLibrary',
    component: MediaLibrary
  },

  // Vendor
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
  },

  // Order Merchandiser
  {
    path: '/create-order-merchandiser',
    name: 'CreateOrderMerchan',
    component: CreateOrderMerchan
  },
  {
    path: '/order-merchandiser-list',
    name: 'OrderMerchandiseList',
    component: OrderMerchandiseList
  }
]

const router = new VueRouter({
  routes
})

export default router
