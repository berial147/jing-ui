import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ZjingUI from '../packages'

Vue.config.productionTip = false
Vue.use(ZjingUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
