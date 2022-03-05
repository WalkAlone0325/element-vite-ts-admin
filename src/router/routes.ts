import PageLayout from '@/layout/page-layout.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: PageLayout,
    name: 'Home',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: '', affix: true },
      },
    ],
  },
]
