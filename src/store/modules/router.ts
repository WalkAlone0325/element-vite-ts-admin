import { defineStore } from 'pinia'
import { routes } from '@/router/routes'
import type { RouteRecordRaw } from 'vue-router'

export interface IRoutesStore {
  routesList: RouteRecordRaw[]
}

export const useRoutesList = defineStore('routesList', {
  state: (): IRoutesStore => ({
    routesList: [],
  }),
  actions: {
    generateRoutes() {
      this.routesList = routes
    },
  },
})
