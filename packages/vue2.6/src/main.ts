import Vue from 'vue'
// @ts-ignore
import App from "tdesign";

import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI)


new Vue({
  el: '#app',
  render: h => h(App),
})