import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Transition from '../components/transition.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/transition',
        name: 'Transition',
        component: Transition
    }
]

export default routes