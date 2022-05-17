import {
  colorValidator,
  variantValidator,
  sizeValidator,
  flairValidator,
  tagValidator
} from './validators'

import {
  UiColor,
  UiVariant,
  UiSize,
  UiFlair,
  UiTag
} from '.'

it('colorValidator should return true if a correct color is passed', () => {
  expect(colorValidator(UiColor.PRIMARY)).toBe(true)
})

it('colorValidator should return false if a wrong color is passed', () => {
  expect(colorValidator('foo' as UiColor)).toBe(false)
})

it('variantValidator should return true if a correct variant is passed', () => {
  expect(variantValidator(UiVariant.FILLED)).toBe(true)
})

it('variantValidator should return false if a wrong variant is passed', () => {
  expect(variantValidator('foo' as UiVariant)).toBe(false)
})

it('sizeValidator should return true if a correct size is passed', () => {
  expect(sizeValidator(UiSize.SMALL)).toBe(true)
})

it('sizeValidator should return false if a wrong size is passed', () => {
  expect(sizeValidator('foo' as UiSize)).toBe(false)
})

it('flairValidator should return true if a correct flair is passed', () => {
  expect(flairValidator(UiFlair.ROUNDED)).toBe(true)
})

it('flairValidator should return false if a wrong flair is passed', () => {
  expect(flairValidator('foo' as UiFlair)).toBe(false)
})

it('tagValidator should return true if a correct tag is passed', () => {
  expect(tagValidator(UiTag.BUTTON)).toBe(true)
})

it('tagValidator should return false if a wrong tag is passed', () => {
  expect(tagValidator('foo' as UiTag)).toBe(false)
})
