import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: require('./components/Home.vue')
  },
  {
    path: '/login',
    component: require('./components/Login.vue')
  },
  {
    path: '/demo',
    component: require('./components/Demo.vue')
  }
]
const router = new VueRouter({ routes })

new Vue({
  router: router,
  template: '<app/>',
  components: { App }
}).$mount('#root')
