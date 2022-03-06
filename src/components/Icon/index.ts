import * as IconList from '@element-plus/icons-vue'
import type { App } from 'vue'

export function setupRegisterIcon(app: App<Element>) {
  for (const iconName in IconList) {
    if (Reflect.has(IconList, iconName)) {
      app.component(iconName, (IconList as any)[iconName])
    }
  }
}
