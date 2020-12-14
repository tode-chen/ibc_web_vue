import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from '@/assets/js/ajax'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/scss/bootstrap.scss';

Vue.use(BootstrapVue)
Vue.prototype.$ajax = ajax
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
