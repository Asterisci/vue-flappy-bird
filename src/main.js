import Vue from 'vue'
import App from './App.vue'
import * as THREE from 'three';

Vue.config.productionTip = false

Vue.prototype.$three = THREE

new Vue({
  render: h => h(App),
}).$mount('#app')
