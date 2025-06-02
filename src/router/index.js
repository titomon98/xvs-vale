import { createRouter, createWebHistory } from 'vue-router'
import InvitadoView from '../views/InvitadoView.vue'

const routes = [
  {
    path: '/invitado',
    name: 'Invitado',
    component: InvitadoView
  }
]

const router = createRouter({
  history: createWebHistory(), // 👈 esto es clave
  routes
})

export default router
