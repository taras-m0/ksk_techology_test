import Vue from 'vue';
import VueRouter from 'vue-router';
import CardsView from '@/views/CardsView.vue';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/cards',
    name: 'cards',
    component: CardsView,
  },
  {
    path: '/table',
    name: 'table',
    component: HomeView,
  },
  {
    path: '/',
    redirect: '/cards',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
