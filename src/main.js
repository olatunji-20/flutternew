import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Flutterwave from  'flutterwave-vue-v3'


Vue.use(Flutterwave, { publicKey: 'FLWPUBK-5f8b0678c717359fb8a051039e1f30bc-X' } )

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
