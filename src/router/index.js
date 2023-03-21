import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/view/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttonPage',
    name: 'ButtonPage',
    // route level code-splitting
    // this generates a separate chunk (buttonPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "buttonPage" */ '@/view/ButtonPage.vue')
  },
  {
    path: '/dialogPage',
    name: 'DialogPage',
    // route level code-splitting
    // this generates a separate chunk (dialogPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dialogPage" */ '@/view/DialogPage.vue')
  },
  {
    path: '/inputPage',
    name: 'InputPage',
    // route level code-splitting
    // this generates a separate chunk (inputPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "inputPage" */ '@/view/InputPage.vue')
  },
  {
    path: '/switchPage',
    name: 'SwitchPage',
    // route level code-splitting
    // this generates a separate chunk (switchPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "switchPage" */ '@/view/SwitchPage.vue')
  },
  {
    path: '/radioPage',
    name: 'RadioPage',
    // route level code-splitting
    // this generates a separate chunk (radioPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "radioPage" */ '@/view/RadioPage.vue')
  },
  {
    path: '/checkboxPage',
    name: 'CheckboxPage',
    component: () => import('@/view/CheckboxPage.vue')
  },
  {
    path: '/formPage',
    name: 'FormPage',
    component: () => import('@/view/FormPage.vue')
  },
  {
    path: '/inputNumberPage',
    name: 'InputNumberPage',
    component: () => import('@/view/InputNumberPage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
