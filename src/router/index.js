import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

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
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/car',
      name: 'Car',
      component: Car,
      meta: {
        keepAlive: true
      },
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
      meta: {
        keepAlive: true
      },
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
      component: Login,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/productdetail/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        keepAlive: true
      },
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
