import Vue from 'vue';
import App from './App.vue';
import VueModal from 'vue2-modal';
import router from './router/index';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(VueModal);

import {
  faPhone,
  faEnvelope,
  faXmark,
  faPen,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

library.add(
  faPhone,
  faWhatsapp,
  faEnvelope,
  faTelegram,
  faXmark,
  faPen,
  faCheck
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
