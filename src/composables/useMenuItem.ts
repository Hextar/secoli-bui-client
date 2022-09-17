import { RouteLocationPathRaw, useRoute } from 'vue-router'

export const useMenuItem = () => {
  const route = useRoute()

  // METHODS
  const isActive = (to: RouteLocationPathRaw, matchHash = false): boolean => {
    if (!to) { return false }
    return matchHash
      ? route.path === to.path && route.hash === to.hash
      : route.path === to.path
  }

  return {
    isActive,
  }
}
