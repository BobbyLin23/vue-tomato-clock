import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'clock',
    },
    {
      path: '/clock',
      component: () => import('../components/Clock.vue'),
    },
    {
      path: '/setting',
      component: () => import('../components/Setting.vue'),
    },
  ],
});

export default router;
