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
import router from './router'
// store
import store from './store'

const app = createApp(App)
// app.use(ElementPlus);
app.use(router).use(store).mount('#app')
