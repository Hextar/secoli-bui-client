import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from '@/store'
import 'sharp'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare module 'sharp' {
  export interface Sharp {
    options: any
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}

// free-email-domains exports string array in json format
declare module 'free-email-domains' {
  const value: string[];
  export default value;
}
