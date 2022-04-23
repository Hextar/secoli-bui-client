import {
  LogoSize,
} from '.'

export const sizeValidator = (value: LogoSize): boolean =>
  Object.values(LogoSize).includes(value)

