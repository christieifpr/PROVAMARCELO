import Vue from 'vue'
import VueRouter from 'vue-router'
import Contador from '../views/Contador.vue'
import Produtos from '../views/Produtos.vue'
import Noticias from '../views/Noticias.vue'
import NovaAba from '../views/NovaAba.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contador',
    name: 'Contador',
    component: Contador
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '/noticias',
    name: 'Notícias Interno',
    component: Noticias
  },
   {
    path: '/novaAba',
    name: 'NovaAba',
    component: NovaAba
  },
]

const router = new VueRouter({
  routes
})

export default router
