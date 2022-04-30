import { onMounted, onUnmounted, readonly, ref, Ref, } from 'vue'
import { useRouter, RouteQueryAndHash } from 'vue-router'

export const useScroll = () => {
  const { replace} = useRouter()

  // VARIABLES
  const scrollY = ref(0);
  const scrollX = ref(0);

  // METHODS
  const hasElemScrolledIntoView = (elem: Element): boolean => {
    const docViewTop = scrollY.value
    const { offsetTop: elemTop, offsetHeight } = elem as HTMLElement
    const elemBottom = elemTop + offsetHeight
    return docViewTop > elemBottom
  }

  const onScroll = (): void => {
    scrollY.value = window?.scrollY
    scrollX.value = window?.scrollX

    // Check for anchors scrolled into view
    const anchors: Element[] =
      Array.from(document.getElementsByClassName('anchor')) as Element[]
    (anchors || []).map((elem: Element) => {
      if (hasElemScrolledIntoView(elem)) {
        replace({ hash: `#${elem.id}`, params: { silently: true } } as RouteQueryAndHash)
      }
    })
  }

  const scrollToRef = (ref: Ref, callback: () => {}): void => {
    const { offsetTop: top, offsetHeight: height } = ref.value
    window.scrollTo({ top: top + height, behavior: 'smooth' })
    callback()
  }

  // ON MOUNTED
  const hasScrolledY = (value: number) => (scrollY.value || 0) > value
  const hasScrolledX = (value: number) => (scrollX.value || 0) > value

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
  });

  // ON UNMOUNTED
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    scrollY: readonly(scrollY),
    scrollX: readonly(scrollX),
    hasScrolledY,
    hasScrolledX,
    scrollToRef
  }  
}