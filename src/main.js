import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import bootstrap from './assets/js/bootstrap';
import vueCountryRegionSelect from 'vue-country-region-select'
import Multiselect from "vue-multiselect";


Vue.use(vueCountryRegionSelect)
Vue.use(bootstrap);
Vue.use(Multiselect);

Vue.config.productionTip = false
window.$ = require('jquery')
window.JQuery = require('jquery')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
