/**
 * Shape of the tooltip rendered using v-tooltip
 *
 * It can be a simple string, or an object containing the content and additional
 * options.
 */
 export type TooltipOptions = {
  content: string | undefined
  delay?: { show?: number, hide?: number },
  classes?: string,
  placement?: 'top' | 'right' | 'bottom' | 'left',
  offset?: number
  trigger?: string
  theme?: string
} | string

/**
 * v-lazy option tpye
 */
 export type LazyOptions = {
  src?: string, // your image url
  loading?: string, // your loading image url
  error?: string// your error image url
}

/**
 * menu item option tpye
 */
export type MenuItemType = {
  label: string,
  to?: string,
  tooltip?: TooltipOptions,
  disabled?: boolean,
  children?: MenuItemType[],
  homepage?: boolean
}