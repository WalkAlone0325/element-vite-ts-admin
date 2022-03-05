import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import usePermission from '@/hooks/permission'
import appRoutes from './modules'
import { isLogin } from '@/utils/auth'
import { useUserStore } from '@/store'
import { routes } from './routes'
import type { Router, LocationQueryRaw } from 'vue-router'
import type { App } from 'vue'

NProgress.configure({ showSpinner: false })

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

// 守卫
export function setupRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    document.title = `后台管理系统 | ${to.meta.title}`

    NProgress.start()

    const userStore = useUserStore()

    async function crossroads() {
      const permission = usePermission()
      if (permission.accessRouter(to)) await next()
      else {
        const destination = permission.findFirstPermissionRoute(
          appRoutes,
          userStore.role
        ) || {
          name: 'notFound',
        }
        await next(destination)
      }
      NProgress.done()
    }

    if (isLogin()) {
      if (userStore.role) {
        crossroads()
      } else {
        try {
          await userStore.info()
          crossroads()
        } catch (error) {
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          })
          NProgress.done()
        }
      }
    } else {
      if (to.name === 'login') {
        next()
        NProgress.done()
        return
      }
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      })
      NProgress.done()
    }
  })
}
