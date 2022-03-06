import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: { locale: 'dashboard', requiresAuth: true, icon: 'DataAnalysis' },
  children: [
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: { locale: 'workplace', requiresAuth: true, role: ['*'] },
    },
    {
      path: 'monitor',
      name: 'monitor',
      component: () => import('@/views/dashboard/monitor/index.vue'),
      meta: { locale: 'monitor', requiresAuth: true, role: ['admin'] },
    },
  ],
} as RouteRecordRaw
