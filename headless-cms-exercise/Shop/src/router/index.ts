import { createRouter, createWebHistory } from 'vue-router'
import ManufacturersView from '@/views/BrandsView.vue'
import ShoeView from '@/views/ShoeView.vue'
import BrandsView from '@/views/BrandsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'brands',
      component: BrandsView
    },
    {
      path: '/shoe',
      name: 'shoe',
      component: ShoeView
    }
  ]
})

export default router
