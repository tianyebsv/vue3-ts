import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import 'normalize.css'
import '@/assets/css/index.less'

import { globalRegister } from '@/global'
// import tyeRequest from './network'

const app = createApp(App)

app.use(globalRegister).use(store).use(router)

// tyeRequest.get({
//   url: '/',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('拦截器')
//       return config
//     }
//   }
// })
app.mount('#app')
