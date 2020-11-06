import { createRouter, createWebHashHistory } from 'vue-router'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`../pages/${page}`)
}

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadPage('Profile.vue'),
    beforeEnter: Auth0Provider.authGuard,
    authorized: true
  },
  {
    path: '/portals',
    name: 'Portals',
    component: loadPage('PortalsDemo.vue')
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
