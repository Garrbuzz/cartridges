import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import appLogin from './components/login.vue'
import appAccounting from './components/accounting.vue'
import appCartridges from './components/cartridges.vue'
import appPrinters from './components/printers.vue'
import appEditCartridge from './components/editcartridge.vue'
import appChangeStatusCartridge from './components/chstcart.vue'
// import appNewStatusCartridge from './components/newstatuscart.vue'

Vue.use(VueResource);
Vue.component('appLogin', appLogin);
Vue.component('appAccounting', appAccounting);
Vue.component('appCartridges', appCartridges);
Vue.component('appEditCartridge', appEditCartridge);
// Vue.component('appNewStatusCartridge', appNewStatusCartridge);
Vue.component('appChangeStatusCartridge', appChangeStatusCartridge);
Vue.component('appPrinters', appPrinters);

new Vue({
  el: '#app',
  render: h => h(App)
})
