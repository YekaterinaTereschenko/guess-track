import type { ButtonHTMLAttributes } from 'react'
import { getButtonClass, type ButtonVariant } from './buttonStyles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export default function Button({
  variant = 'primary',
  type = 'button',
  className,
  children,
  ...rest
}: Props) {
  return (
    <button type={type} className={getButtonClass(variant, className)} {...rest}>
      {children}
    </button>
  )
}