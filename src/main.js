import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
