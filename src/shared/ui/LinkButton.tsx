import { Link, type LinkProps } from 'react-router'
import { getButtonClass, type ButtonVariant } from './buttonStyles'

interface Props extends LinkProps {
  variant?: ButtonVariant
}

export default function LinkButton({ variant = 'primary', className, children, ...rest }: Props) {
  return (
    <Link className={getButtonClass(variant, className)} {...rest}>
      {children}
    </Link>
  )
}