import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login.vue'
import regist from '@/pages/regist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: login
    },
    {
      path: '/regist',
      component: regist
    }
  ]
})
