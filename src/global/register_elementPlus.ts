import type { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
// 如果要使用.scss样式文件，则需要引入base.scss文件
// import 'element-plus/packages/theme-chalk/src/base.scss'

import {
  ElButton,
  ElCheckbox,
  ElContainer,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElTable,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElTable,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
]

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
