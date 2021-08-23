import { App } from 'vue'
import registerElement from './register_elementPlus'

export function globalRegister(app: App): void {
  app.use(registerElement)
}
