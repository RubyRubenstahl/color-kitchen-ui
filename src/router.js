import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Users from './views/Users'
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
      component: Users,
      meta: {
        icon: 'group',
        title: 'Manage Users',
        restrictToAdmin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
