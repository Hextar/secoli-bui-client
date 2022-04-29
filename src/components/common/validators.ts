import {
  UiColor,
  UiFlair,
  UiSize,
  UiTag,
  UiVariant
} from './types'

export const colorValidator = (value: UiColor): boolean =>
  Object.values(UiColor).includes(value)

export const variantValidator = (value: UiVariant): boolean =>
  Object.values(UiVariant).includes(value)

export const sizeValidator = (value: UiSize): boolean =>
  Object.values(UiSize).includes(value)

export const flairValidator = (value: UiFlair): boolean =>
  Object.values(UiFlair).includes(value)

export const tagValidator = (value: UiTag): boolean =>
  Object.values(UiTag).includes(value)
