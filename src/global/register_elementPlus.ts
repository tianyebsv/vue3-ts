import type { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
// 如果要使用.scss样式文件，则需要引入base.scss文件
// import 'element-plus/packages/theme-chalk/src/base.scss'

import { ElButton, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus'

const components = [ElButton, ElContainer, ElHeader, ElMain, ElFooter]

// const plugins = [
//   ElInfiniteScroll,
//   ElLoading,
//   ElMessage,
//   ElMessageBox,
//   ElNotification
// ]
export default function (app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// plugins.forEach((plugin) => {
//   app.use(plugin)
// })
