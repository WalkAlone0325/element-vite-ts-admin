import PageLayout from '@/layout/page-layout.vue'
import BlankLayout from '@/layout/blank-layout.vue'
import type { RouteRecordRaw } from 'vue-router'
import Login from './modules/login'
import appRoutes from './modules'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'login',
  },
  Login,
  {
    name: 'root',
    path: '/',
    component: PageLayout,
    children: appRoutes,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/index.vue'),
  },
]
