import { useRoute } from 'vue-router'

export const useMenuItem = () => {
  const route = useRoute()

  // METHODS
  const isActive = ({ path, hash }: any, matchHash: boolean = false): boolean => {
    return matchHash
      ? route.path === path && route.hash === hash
      : route.path === path
  }

  return {
    isActive
  }
}