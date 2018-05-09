import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
