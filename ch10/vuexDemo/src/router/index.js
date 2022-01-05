import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import Home from '../pages/home.vue'


const routes = [
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/about.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/count',
        name: 'Count',
        component: () => import('../components/count.vue') 
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router