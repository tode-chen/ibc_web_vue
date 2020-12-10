import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () => import('@/views/Index')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About')
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('@/views/Help')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router