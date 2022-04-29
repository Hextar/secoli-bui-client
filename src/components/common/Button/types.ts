import { UiVariant, UiColor, UiSize, UiFlair, UiTag } from '@/components/common/types'

export type ButtonProps = {
  tag: UiTag | null,
  variant: UiVariant | null,
  color: UiColor | null,
  flair: UiFlair | null,
  size: UiSize | null
  fullWidth: boolean | null,
  disabled?: boolean
}