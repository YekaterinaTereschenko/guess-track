interface Props {
  text?: string
}

const bars = ['bg-accent', 'bg-pink', 'bg-ocean', 'bg-white']

export default function Loader({ text = 'Загружаем треки...' }: Props) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-6 py-24">
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="h-32 w-32 animate-spin [animation-duration:2s]"
      >
        <circle cx="60" cy="60" r="58" className="fill-ink" />
        <circle cx="60" cy="60" r="50" fill="none" strokeWidth="2" className="stroke-white/10" />
        <circle cx="60" cy="60" r="42" fill="none" strokeWidth="2" className="stroke-white/10" />
        <circle cx="60" cy="60" r="34" fill="none" strokeWidth="2" className="stroke-white/10" />
        <path
          d="M18 44 A46 46 0 0 1 44 16"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          className="stroke-white/30"
        />
        <circle cx="60" cy="60" r="22" className="fill-accent" />
        <circle cx="60" cy="48" r="4" className="fill-pink" />
        <circle cx="60" cy="60" r="4" className="fill-brand" />
      </svg>

      <div aria-hidden="true" className="flex h-8 items-end gap-1.5">
        {bars.map((color, index) => (
          <span
            key={color}
            className={`w-2 rounded-full animate-eq ${color}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          />
        ))}
      </div>

      <p className="text-xl font-bold">{text}</p>
    </div>
  )
}