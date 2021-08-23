import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import { globalRegister } from '@/global'
import '@/network/axiosDemo'

const app = createApp(App)
app.use(globalRegister).use(store).use(router)
app.mount('#app')
