import Vue from 'vue'
import App from './App.vue'
import VueModal from "vue2-modal";

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueModal);
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faWhatsapp, faEnvelope, faTelegram)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
