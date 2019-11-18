import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import( /* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue')
const LandingPage = () => import('../components/HelloWorld.vue')

function loadView(view) {
    return () => import( /* webpackChunkName: "view[request]" */ `../components/dashboardContents/${view}.vue`)
}

const routes = [{
        path: '/',
        component: LandingPage
    },
    {
        path: '/components/dashboardLayout.vue',
        component: DashboardLayout,
        children: [{
                name: 'UserController',
                path: '',
                component: loadView('userController')
            },

            {
                name: 'SparepartsController',
                path: '/dashboardContents/sparepartsController',
                component: loadView('sparepartsController')
            }
        ]
    },
]
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: routes
})

export default router