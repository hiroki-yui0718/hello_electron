import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import radikoSearch from '@/components/radikoSearch'
import Other from '@/components/Other'
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.use(Router)
Vue.use(BootstrapVue) // added

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/search',
      component: radikoSearch
      
    },
    {
      path:'/',
      component:HelloWorld,
    },
    {
      path:'/todo',
      component:Todo
    },
    {
      path:'/other',
      component:Other
    }
  ]
})