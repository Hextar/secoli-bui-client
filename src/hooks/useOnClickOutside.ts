
import { onMounted, onUnmounted, Ref } from 'vue'

export const useOnClickOutside = (ref: Ref, callback = () => {}) => {
  // METHODS
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }
 
  // ON MOUNTED
  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  // ON UNMOUNTED
  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })

  return {
    handleClickOutside
  }
}