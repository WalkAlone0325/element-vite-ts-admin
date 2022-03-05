import { createPinia } from 'pinia'
import type { App } from 'vue'
import { useRoutesList } from './modules/router'
import { useSetting } from './modules/setting'
import { useUserStore } from './modules/user'

const store = createPinia()

export { useSetting, useRoutesList, useUserStore }

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
