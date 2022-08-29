import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/All.vue'
import Style from '../views/Style.vue'
import Rate from '../views/Rate.vue'
import Sell from '../views/Sell.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/all',
    name: 'all',
    component: All
  },{
    path: '/rate',
    name: 'rate',
    component: Rate
  },{
    path: '/sell',
    name: 'sell',
    component: Sell
  },{
    path: '/style',
    name: 'style',
    component: Style
  },{
    path:'*',
    redirect:'/all'
  }
 
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
