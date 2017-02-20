import Vue from 'vue'
import Router from 'vue-router'
import List from 'components/list/list.vue'
import Detail from 'components/detail/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'list',
      component: List
    },{
      path: '/detail/:id',
      name:'detail',
      component: Detail
    }
  ]
})
