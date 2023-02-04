import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IdiomView from '../views/IdiomView.vue'
import MusicView from '../views/MusicView.vue'
import CharacterView from '../views/CharacterView.vue'
import CapitalView from '../views/CapitalView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/idiom',
    name: 'idiom',
    component: IdiomView
  },
  {
    path: '/music',
    name: 'music',
    component: MusicView
  },
  {
    path: '/character',
    name: 'character',
    component: CharacterView
  },
  {
    path: '/capital',
    name: 'capital',
    component: CapitalView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
