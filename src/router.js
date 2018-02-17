import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import SamplePage from '@/pages/SamplePage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/page', name: 'Page', component: SamplePage },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register }
  ]
})
