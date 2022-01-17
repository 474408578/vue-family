import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import { getToken } from '../utils/auth'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }, 
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// 路由守卫
router.beforeEach((to, from, next) => {
    let token = getToken()
    if(to.fullPath !== '/login') {
        if (token) {
          next()
        } else {
          next('/login')
        }
      } else {
        if (token) {
          next('/')
        } else {
          next()
        }
      }
}) 

export default router