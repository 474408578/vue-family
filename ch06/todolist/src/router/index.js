import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Counter from '../components/Counter.vue'

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
        path: '/counter',
        name: 'Counter',
        component: Counter
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router