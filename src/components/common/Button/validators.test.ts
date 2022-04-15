import {
  colorValidator,
  variantValidator,
  sizeValidator,
  flairValidator,
  tagValidator
} from './validators'

import {
  ButtonColor,
  ButtonVariant,
  ButtonSize,
  ButtonFlair,
  ButtonTag
} from '.'

it('colorValidator should return true if a correct color is passed', () => {
  expect(colorValidator(ButtonColor.PRIMARY)).toBe(true)
})

it('colorValidator should return false if a wrong color is passed', () => {
  expect(colorValidator('foo' as ButtonColor)).toBe(false)
})

it('variantValidator should return true if a correct variant is passed', () => {
  expect(variantValidator(ButtonVariant.DEFAULT)).toBe(true)
})

it('variantValidator should return false if a wrong variant is passed', () => {
  expect(variantValidator('foo' as ButtonVariant)).toBe(false)
})

it('sizeValidator should return true if a correct size is passed', () => {
  expect(sizeValidator(ButtonSize.SMALL)).toBe(true)
})

it('sizeValidator should return false if a wrong size is passed', () => {
  expect(sizeValidator('foo' as ButtonSize)).toBe(false)
})

it('flairValidator should return true if a correct flair is passed', () => {
  expect(flairValidator(ButtonFlair.ROUNDED)).toBe(true)
})

it('flairValidator should return false if a wrong flair is passed', () => {
  expect(flairValidator('foo' as ButtonFlair)).toBe(false)
})

it('tagValidator should return true if a correct tag is passed', () => {
  expect(tagValidator(ButtonTag.BUTTON)).toBe(true)
})

it('tagValidator should return false if a wrong tag is passed', () => {
  expect(tagValidator('foo' as ButtonTag)).toBe(false)
})
