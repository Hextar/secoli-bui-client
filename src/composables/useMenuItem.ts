import { useRoute } from 'vue-router'

export const useMenuItem = () => {
  const route = useRoute()

  // METHODS
  const isActive = ({ path, hash }: any, matchHash = false): boolean => {
    return matchHash
      ? route.path === path && route.hash === hash
      : route.path === path
  }

  return {
    isActive,
  }
}
