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
