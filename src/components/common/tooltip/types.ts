export type TooltipPosition =
  | 'top-start' | 'top' | 'top-end'
  | 'right-start' | 'right' | 'right-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'
  | 'left-start' | 'left' | 'left-end'

export type TooltipTrigger =
  | 'hover'
  | 'focus'
  | 'click-to-open';

export type TooltipDelay = {
  show?: number,
  hide?: number 
}