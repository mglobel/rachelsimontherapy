import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Home from './components/Home'
import Therapy from './components/Therapy'
import Contact from './components/Contact'
import Training from './components/Training'
import Resources from './components/Resources'

// ==================== Router registration ====================
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/therapy', component: Therapy },
    { path: '/training', component: Training },
    { path: '/resources', component: Resources },
    { path: '/contact', component: Contact },
  ]
})
