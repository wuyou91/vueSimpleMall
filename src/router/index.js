import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// const Home = resolve => require(['@/pages/home/Home'], resolve)
// const Category = resolve => require(['@/pages/category/Category'], resolve)
// const Car = resolve => require(['@/pages/car/Car'], resolve)
// const User = resolve => require(['@/pages/user/User'], resolve)
// const Login = resolve => require(['@/pages/login/Login'], resolve)
// const ProductDetail = resolve => require(['@/pages/productdetail/ProductDetail'], resolve)
// const register = resolve => require(['@/pages/login/components/register'], resolve)

// const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'Home')
// const Category = r => require.ensure([], () => r(require('@/pages/category/Category')), 'Category')
// const Car = r => require.ensure([], () => r(require('@/pages/car/Car')), 'Car')
// const User = r => require.ensure([], () => r(require('@/pages/user/User')), 'User')
// const Login = r => require.ensure([], () => r(require('@/pages/login/Login')), 'Login')
// const ProductDetail = r => require.ensure([], () => r(require('@/pages/productdetail/ProductDetail')), 'ProductDetail')
// const register = r => require.ensure([], () => r(require('@/pages/login/components/register')), 'register')

const Home = () => import('@/pages/home/Home')
const Category = () => import('@/pages/category/Category')
const Car = () => import('@/pages/car/Car')
const User = () => import('@/pages/user/User')
const Login = () => import('@/pages/login/Login')
const ProductDetail = () => import('@/pages/productdetail/ProductDetail')
const register = () => import('@/pages/login/components/register')

const router = new Router({
  mode: 'history',
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
      component: Car,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('login')) {
          next()
        } else {
          router.push({name: 'Login'})
        }
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('login')) {
          next()
        } else {
          router.push({name: 'Login'})
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/productdetail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('login')) {
          router.push({name: 'Home'})
        } else {
          next()
        }
      }
    }
  ]
})

export default router
