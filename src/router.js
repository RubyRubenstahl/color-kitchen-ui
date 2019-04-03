import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'

Vue.use(Router)

export const viewRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    icon: 'home',
    title: 'Home'
  },
  {
    path: '/users',
    name: 'users',
    component: Home,
    icon: 'group',
    title: 'Manage Users'
  },

];


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...viewRoutes,
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
