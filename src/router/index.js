import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/PageHome.vue'
import PageProduct from '../views/PageProduct.vue'
import PageDeveloper from '../views/PageDeveloper.vue'
import PageResource from '../views/PageResource.vue'
import PagePricing from '../views/PagePricing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/product',
    name: 'PageProduct',
    component: PageProduct
  },
  {
    path: '/developer',
    name: 'PageDeveloper',
    component: PageDeveloper
  },
  {
    path: '/resource',
    name: 'PageResource',
    component: PageResource
  },
  {
    path: '/pricing',
    name: 'PagePricing',
    component: PagePricing
  },
  {
    path: '/sigin',
    name: 'PageSignin',
    component: PagePricing
  },
  {
    path: '/signup',
    name: 'PageSignup',
    component: PagePricing
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
