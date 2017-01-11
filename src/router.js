import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Home from './components/Home'
import Contact from './components/Contact'
import Speaking from './components/Speaking'
import Resources from './components/Resources'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/speaking', component: Speaking },
    { path: '/resources', component: Resources },
    { path: '/contact', component: Contact },
  ]
})
