import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Species from '../components/Species'
import Cart from '../components/Cart'
import Mine from '../components/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/species',name: 'species',component: Species},
    {path: '/cart',name: 'cart',component: Cart},
    {path: '/mine',name: 'mine',component: Mine},
    {path: '/',redirect:"/home"},
    {path: '*',redirect:"/home"}
  ]
})

























































