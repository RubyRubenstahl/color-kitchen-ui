import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        icon: 'home',
        title: 'Home'
      }
    },
    {
      path: '/users',
      name: 'users',
      component: Home,
      meta: {
        icon: 'group',
        title: 'Manage Users'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
