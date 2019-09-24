import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('./views/forgot-password')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('./views/reset-password')
    },
    {
      path: '/verification',
      name: 'verification',
      component: () => import('./views/verification')
    },
    {
      path: '/fundraiser',
      name: 'fundraiser',
      components: {
        default: () => import('./components/fundraiserlayout')
      },
      children: [
        {
          path: '',
          component: () => import('./views/fundraiser/createprofile')
        },
        {
          path: 'userprofile',
          component: () => import('./views/fundraiser/userprofile')
        },
        {
          path: 'projectlisting',
          component: () => import('./views/fundraiser/projectlist')
        },
        {
          path: 'viewproject',
          component: () => import('./views/fundraiser/viewproject')
        },
        {
          path: 'viewuser',
          component: () => import('./views/fundraiser/viewuser')
        },
        {
          path: 'viewcompany',
          component: () => import('./views/fundraiser/viewcompany')
        },
        {
          path: 'billing',
          component: () => import('./views/fundraiser/billing')
        },
        {
          path: 'downloads',
          component: () => import('./views/fundraiser/download')
        },
        {
          path: 'changepassword',
          component: () => import('./views/fundraiser/changepassword')
        },
        {
          path: 'createproject',
          component: () => import('./views/fundraiser/createproject')
        },  
      ]
    }
  ]
})
