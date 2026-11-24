export type ButtonVariant = 'primary' | 'outline' | 'solid'

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-xl font-extrabold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-ink',
  outline: 'border-2 border-white text-white',
  solid: 'bg-brand text-white',
}

export function getButtonClass(variant: ButtonVariant, className = '') {
  return `${base} ${variants[variant]} ${className}`
}