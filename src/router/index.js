import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'home',
    component: AdminView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

export default router