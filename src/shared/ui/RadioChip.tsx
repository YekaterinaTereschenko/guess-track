interface Props {
  name: string
  value: string
  label: string
  defaultChecked?: boolean
  className?: string
}

export default function RadioChip({ name, value, label, defaultChecked, className = '' }: Props) {
  return (
    <label className={`cursor-pointer ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="flex h-13 items-center justify-center rounded-full bg-muted/40 px-6 text-lg font-bold text-ink transition peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/40">
        {label}
      </span>
    </label>
  )
}