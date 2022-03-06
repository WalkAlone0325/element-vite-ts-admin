import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    role?: string[]
    requiresAuth: boolean
    icon?: any
    locale?: string
    menuSelectKey?: string
  }
}
