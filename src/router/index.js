import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'Home')
const Category = r => require.ensure([], () => r(require('@/pages/category/Category')), 'Category')
const Car = r => require.ensure([], () => r(require('@/pages/car/Car')), 'Car')
const User = r => require.ensure([], () => r(require('@/pages/user/User')), 'User')
const Login = r => require.ensure([], () => r(require('@/pages/login/Login')), 'Login')
const ProductDetail = r => require.ensure([], () => r(require('@/pages/productdetail/ProductDetail')), 'ProductDetail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/productdetail',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
