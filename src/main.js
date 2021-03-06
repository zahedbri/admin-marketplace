import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ToastPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(ToastPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#admin-marketplace')
