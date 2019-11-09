import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import Bus from 'vue-bus'

// Vue.use(Bus)

new Vue({
  render: h => h(App),
}).$mount('#app')
