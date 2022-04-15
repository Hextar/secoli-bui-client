import {
  ButtonColor,
  ButtonFlair,
  ButtonSize,
  ButtonTag,
  ButtonVariant
} from '@/components/common/Button'

export const colorValidator = (value: ButtonColor): boolean =>
  Object.values(ButtonColor).includes(value)

export const variantValidator = (value: ButtonVariant): boolean =>
  Object.values(ButtonVariant).includes(value)

export const sizeValidator = (value: ButtonSize): boolean =>
  Object.values(ButtonSize).includes(value)

export const flairValidator = (value: ButtonFlair): boolean =>
  Object.values(ButtonFlair).includes(value)

export const tagValidator = (value: ButtonTag): boolean =>
  Object.values(ButtonTag).includes(value)
