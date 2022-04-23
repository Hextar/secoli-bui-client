import { getCurrentInstance } from 'vue'

export const getContext = () => {
  try {
    const { appContext: ctx } = getCurrentInstance() || {}
    return ctx
  } catch (err: unknown) {
    console.error(err)
  }
} 