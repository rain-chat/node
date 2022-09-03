import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../components/article.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Article
  }
]

const router = new VueRouter({
  routes
})

export default router
