// configure router
import VueRouter from 'vue-router'
import Vue from 'vue'
import Dashboard from './screen/Dashboard/Dashboard'
import NotFound from './screen/NotFound/NotFound'
import HomeRouter from '@/screen/Home/GuiaLevelUpRouter'

Vue.use(VueRouter)

let children = [
  HomeRouter,
  MemoryRouter,
  SuperCategoryRouter,
  CategoryRouter,
  CategoryDetailRouter,
  PlayScreenRouter,
  PlayRouter,
  RankingRouter,
  RankingDetailRouter,
]

let routes = [
  {
    path: '/',
    component: Dashboard,
    redirect: '/home',
    children
  },
  { path: '*', component: NotFound }
]

const Router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

export default Router
