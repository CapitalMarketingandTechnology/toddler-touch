import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Items from '@/pages/Items'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/colors', name: 'colors', component: Items },
    { path: '/letters', name: 'letters', component: Items },
    { path: '/numbers', name: 'numbers', component: Items }
  ]
})
