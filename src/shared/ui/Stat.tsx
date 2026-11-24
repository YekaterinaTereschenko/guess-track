interface Props {
  value: string
  label: string
}

export default function Stat({ value, label }: Props) {
  return (
    <div>
      <div className="text-[44px] font-extrabold text-accent">{value}</div>
      <div className="text-base text-muted">{label}</div>
    </div>
  )
}