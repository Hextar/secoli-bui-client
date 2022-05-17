import VueLazyLoad from 'vue3-lazyload'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, app }) => {
  if (isClient)
    app.use(VueLazyLoad)
}
