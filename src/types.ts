import { type ViteSSGContext } from 'vite-ssg'

import type { RouteLocationPathRaw } from 'vue-router'

export type UserModule = (ctx: ViteSSGContext) => void


import { TooltipDelay, TooltipPosition } from '~/components/common/tooltip';

/**
 * Shape of the tooltip rendered using v-tooltip
 *
 * It can be a simple string, or an object containing the content and additional
 * options.
 */
export type TooltipOptions = {
  content: string | undefined,
  disabled?: boolean,
  delay?: TooltipDelay,
  classes?: string,
  placement?: TooltipPosition,
  offset?: number,
  trigger?: string,
  theme?: string,
}

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
  to?: RouteLocationPathRaw
  tooltip?: TooltipOptions
  disabled?: boolean
  children?: MenuItemType[]
  homepage?: boolean
  external?: boolean,
}


/**
 * Price
 */
export interface PriceType {
  sale: number
  full: number,
  label?: string
}
