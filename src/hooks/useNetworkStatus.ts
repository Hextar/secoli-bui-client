
import { computed, ref, onMounted, onUnmounted, readonly } from 'vue';

export enum NETWORK_STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline'
}

export const useNetworkStatus = () => {
  // VARIABLES
  const status = ref(NETWORK_STATUS.ONLINE)

  // COMPUTED
  const isOnline = computed(() => status.value === NETWORK_STATUS.ONLINE)

  // METHODS
  const updateOnlineStatus = () => {
    status.value = navigator.onLine ? NETWORK_STATUS.ONLINE : NETWORK_STATUS.OFFLINE
  }

  // ON MOUNTED
  onMounted(() => {
    window.addEventListener(NETWORK_STATUS.ONLINE, updateOnlineStatus)
    window.addEventListener(NETWORK_STATUS.OFFLINE, updateOnlineStatus)
  });

  // ON UNMOUNTED
  onUnmounted(() => {
    window.removeEventListener(NETWORK_STATUS.ONLINE, updateOnlineStatus)
    window.removeEventListener(NETWORK_STATUS.OFFLINE, updateOnlineStatus)
  })

  return {
    status: readonly(status)
  }
}