import { ref, onUnmounted } from 'vue'

export const useTimer = (callback = (times?: number, now?: number) => {}, step = 1000) => {
  // VARIABLES
  let timerVariableId: any
  let times = 0
  const isPaused = ref(false)
   
  // METHODS
  const stop = () => {
    if (timerVariableId) {
      clearInterval(timerVariableId)
      timerVariableId = undefined
      resume()
    }
  }
  
  const start = () => {
    stop();
    if (!timerVariableId) {
      times = 0
      timerVariableId = setInterval(() => {
        if (!isPaused.value) {
          times++
          callback(times, step * times)
        }
      }, step)
    }
  }

  const pause = () => {
    isPaused.value = true
  }

  const resume = () => {
    isPaused.value = false
  }

  // ON UNMOUNTED
  onUnmounted(() => {
    if (timerVariableId) { clearInterval(timerVariableId) }
  })

  return {
    start,
    stop,
    pause,
    resume,
    isPaused
  }
}