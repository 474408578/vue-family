import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Counter from '../components/Counter.vue'
import Rate0 from '../components/Rate0.vue'
import Rate1 from '../components/Rate1.vue'
import Rate2 from '../components/Rate2.vue'

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
    {
        path: '/rate0',
        name: 'Rate0',
        component: Rate0
    },
    {
        path: '/rate1',
        name: 'Rate1',
        component: Rate1
    }, 
    {
        path: '/rate2',
        name: 'Rate2',
        component: Rate2
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router