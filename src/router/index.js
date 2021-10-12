import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'Member',
    component: Member
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
