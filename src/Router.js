// configure router
import VueRouter from 'vue-router'
import Vue from 'vue'
import Dashboard from './screen/Dashboard/Dashboard'
import NotFound from './screen/NotFound/NotFound'
import GuiaLevelUpRouter from "@/screen/GuiaLevelUp/GuiaLevelUpRouter";

Vue.use(VueRouter)

let children = [
  GuiaLevelUpRouter
]

let routes = [
  {
    path: '/',
    component: Dashboard,
    redirect: '/levelup',
    children
  },
  { path: '*', component: NotFound }
]

const Router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

export default Router
