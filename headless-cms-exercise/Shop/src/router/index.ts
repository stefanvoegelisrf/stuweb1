import { createRouter, createWebHistory } from 'vue-router'
import ManufacturersView from '@/views/BrandsView.vue'
import ShoeView from '@/views/ShoeView.vue'
import BrandsView from '@/views/BrandsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { path: "/brands" }
    },
    {
      path: "/brands",
      component: BrandsView
    },
    {
      path: "/shoes",
      component: ShoeView
    },
    {
      path: "/shoes/:brand",
      component: ShoeView,
      props: true
    }
  ]
})

export default router
