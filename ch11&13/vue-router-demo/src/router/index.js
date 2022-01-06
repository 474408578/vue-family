import { createRouter, createWebHashHistory } from "./grouter/index";
// import {createRouter, createWebHashHistory } from 'vue-router' 

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Todo from '../pages/todo.vue'

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
        path: '/todo',
        name: 'Todo',
        component: Todo
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router