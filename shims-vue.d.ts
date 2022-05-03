/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from '@/store'
import 'sharp'

// vue
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// store
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

// json
declare module "*.json" {
  const value: any;
  export default value;
}

// free-email-domains exports string array in json format
declare module 'free-email-domains' {
  const value: string[];
  export default value;
}
