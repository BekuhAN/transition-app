import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faWhatsapp, faEnvelope, faTelegram)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
