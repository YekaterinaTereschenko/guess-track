interface Props {
  number: number
  color: 'bg-accent' | 'bg-pink' | 'bg-ocean' | 'bg-white'
  artist: string
  title: string
  onClick?: () => void
}

export default function SongCard({ number, color, artist, title, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[240px] flex-col justify-between rounded-[28px] p-7 text-left text-ink transition hover:opacity-90 ${color}`}
    >
      <span
        aria-hidden="true"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-xl font-extrabold text-white"
      >
        {number}
      </span>
      <span>
        <strong className="block text-[28px] leading-tight">{title}</strong>
        <span className="text-lg">{artist}</span>
      </span>
    </button>
  )
}