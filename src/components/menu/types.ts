import { TooltipOptions  } from "@/types"

export type MenuItemType {
  label: string,
  to?: string,
  tooltip?: TooltipOptions,
  disabled?: boolean,
  children?: MenuItemType[]
}