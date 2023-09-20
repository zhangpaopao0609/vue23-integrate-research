import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

// @ts-ignore
import App from "./App";

Vue.use(VueCompositionAPI)

// Vue.config.productionTip = false
// Vue.config.devtools = true

new Vue({
  el: '#app',
  render: h => h(App),
})