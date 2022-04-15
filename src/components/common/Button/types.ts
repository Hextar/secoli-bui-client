export type ButtonProps = {
  tag: ButtonTag | null,
  variant: ButtonVariant | null,
  color: ButtonColor | null,
  flair: ButtonFlair | null,
  size: ButtonSize | null
  fullWidth: boolean | null,
  disabled?: boolean
}

export enum ButtonVariant {
  DEFAULT = 'default',
  OUTLINE = 'outline'
}

export enum ButtonColor {
  PRIMARY = 'primary',
  WHITE = 'white',
  BLACK = 'black'
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum ButtonFlair {
  SOFT = 'soft',
  ROUNDED = 'rounded',
  SQUARED = 'squared'
}

export enum ButtonTag {
  BUTTON = 'button',
  ROUTER = 'router-link',
  A = 'a',
  DIV = 'div'
}
