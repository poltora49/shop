import { createRouter, createWebHistory } from 'vue-router'
import MainCardList from '../views/MainCardList.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainCardList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/product/:productId',
      name: 'Product',
      component: Product
    }
  ]
})

export default router
