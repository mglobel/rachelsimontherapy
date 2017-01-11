import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Home from './components/Home'
import Practice from './components/Practice'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/practice', component: Practice },
  ]
})
