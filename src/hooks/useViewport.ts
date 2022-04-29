import { computed, ref, onMounted, onUnmounted } from 'vue';

export enum VIEWPORT {
  MOBILE = 760,
  TABLET = 922,
  DESKTOP = 1440,
  LARGE_DESKTOP = 1440,
}

export const useViewport = () => {
  // VARIABLES
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  // COMPTUED
  const isMobile = computed(() => width.value <= VIEWPORT.MOBILE)
  const isTablet = computed(() => width.value > VIEWPORT.MOBILE && width.value <= VIEWPORT.TABLET)
  const isDesktop = computed(() => width.value > VIEWPORT.TABLET && width.value <= VIEWPORT.DESKTOP)
  const isLargeDesktop = computed(() => width.value > VIEWPORT.DESKTOP)

  // METHODS
  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  // ON MOUNTED
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  });

  // ON UNMOUNTED
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop
  }  
}