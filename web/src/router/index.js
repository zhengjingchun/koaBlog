import Vue from 'vue'
import Router from 'vue-router'
import HomeModel from '@/pages/HomeModel'
import HomePage from '@/pages/HomePage'
import Archive from '@/pages/Archive'
import Tags from '@/pages/Tags'
import About from '@/pages/About'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeModel',
      component: HomeModel,
      children: [
        {
          path: 'h',
          name: 'homePage',
          component: HomePage,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'a',
          name: 'archive',
          component: Archive,
          meta: {
            title: '归档'
          }
        },
        {
          path: 't',
          name: 'tags',
          component: Tags,
          meta: {
            title: '标签'
          }
        },
        {
          path: 'b',
          name: 'about',
          component: About,
          meta: {
            title: '关于我'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})
