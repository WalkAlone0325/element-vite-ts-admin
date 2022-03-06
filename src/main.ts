import { createApp } from 'vue'
import App from './App.vue'

// import "@/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import '@/styles/index.scss'

// // fade/zoom
// import 'element-plus/theme-chalk/src/base.scss'
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'

// router
import { router, setupRouter, setupRouterGuard } from './router'
// store
import { setupStore } from './store'
import { setupRegisterIcon } from './components/Icon'

async function bootstrap() {
  const app = createApp(App)

  // 图标
  setupRegisterIcon(app)

  // 配置 pinia
  setupStore(app)

  // 配置 router
  setupRouter(app)

  // 配置路由守卫
  setupRouterGuard(router)

  // await router.isReady()

  app.mount('#app')
}

bootstrap()
// app.use(ElementPlus);
// app.use(router).use(store).mount('#app')
