import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

let bootstrap = require('bootstrap')
import jQuery from 'jquery'
global.jQuery = jQuery
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(bootstrap);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
