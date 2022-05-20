import { type ViteSSGContext } from 'vite-ssg'

import type { RouteLocationRaw } from 'vue-router'

export type UserModule = (ctx: ViteSSGContext) => void

export type TooltipDelay = {
  show?: number,
  hide?: number 
}

/**
 * Shape of the tooltip rendered using v-tooltip
 *
 * It can be a simple string, or an object containing the content and additional
 * options.
 */
export type TooltipOptions = {
  content: string | undefined
  delay?: TooltipDelay
  classes?: string
  placement?: 'top' | 'right' | 'bottom' | 'left'
  offset?: number
  trigger?: string
  theme?: string
} | string

/**
 * v-lazy option tpye
 */
export interface LazyOptions {
  src?: string | any[]
  loading?: string | any[]
  error?: string | any[]
}

/**
 * menu item option tpye
 */
export interface MenuItemType {
  label: string
  to?: RouteLocationRaw
  tooltip?: TooltipOptions
  disabled?: boolean
  children?: MenuItemType[]
  homepage?: boolean
}
