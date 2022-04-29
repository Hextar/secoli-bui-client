
import { onMounted, onUnmounted, Ref } from 'vue'

export const useOnClickOutside = (ref: Ref, callback = () => {}) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }
 
  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })

  return {
    handleClickOutside
  }
}