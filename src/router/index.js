import Vue from 'vue'
import Router from 'vue-router'


// 路由信息
import Index from '../view/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
