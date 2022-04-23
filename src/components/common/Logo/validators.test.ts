import {
  sizeValidator,
} from './validators'

import {
  LogoSize,
} from '.'

it('sizeValidator should return true if a correct size is passed', () => {
  expect(sizeValidator(LogoSize.SMALL)).toBe(true)
})

it('sizeValidator should return false if a wrong size is passed', () => {
  expect(sizeValidator('foo' as LogoSize)).toBe(false)
})