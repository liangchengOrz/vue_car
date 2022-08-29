import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../views/Goods.vue'
import Car from '../views/Car.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },{
    path: '/car',
    name: 'car',
    component: Car
  },{
    path: '*',
    redirect:"/goods"
  },
 
]

const router = new VueRouter({
  routes
})

export default router
