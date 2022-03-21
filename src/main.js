import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import axios from 'axios'
import Vuex from 'vuex'
import storeBlueprint from './store.js'

window.axios = axios

Vue.config.productionTip = false
Vue.use(Vuex)

let store = new Vuex.Store(storeBlueprint)

new Vue({
  store : store,
  render: h => h(App),
}).$mount('#app')
