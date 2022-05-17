import FloatingVue from 'floating-vue'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, app }) => {
  if (isClient) {
    app.use(FloatingVue, {
      themes: {
        'secoli-bui': {
          $extend: 'tooltip',
          triggers: ['hover', 'click', 'touch'],
          distance: 6,
        },
      },
    })
  }
}
