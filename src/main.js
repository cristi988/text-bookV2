import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import axios from 'axios';
import Vuex from 'vuex';
import storeBlueprint from './store.js';
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";

window.axios = axios;
const options = {

};

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Toast, options);


let store = new Vuex.Store(storeBlueprint);

new Vue({
  store : store,
  render: h => h(App),
}).$mount('#app')
