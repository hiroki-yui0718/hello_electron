import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NeDB from 'nedb'

Vue.use(NeDB)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
