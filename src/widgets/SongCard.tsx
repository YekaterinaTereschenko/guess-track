export type CardState = 'default' | 'correct' | 'wrong' | 'dimmed'

interface Props {
  number: number
  color: 'bg-accent' | 'bg-pink' | 'bg-ocean' | 'bg-white'
  artist: string
  title: string
  state?: CardState
  onClick?: () => void
}

export default function SongCard({ number, color, artist, title, state = 'default', onClick }: Props) {
  const background =
    state === 'correct' ? 'bg-success' : state === 'wrong' ? 'bg-danger' : color

  const extra = {
    default: 'cursor-pointer hover:opacity-90',
    correct: 'scale-[1.02]',
    wrong: '',
    dimmed: 'opacity-40',
  }[state]

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={state !== 'default'}
      className={`flex min-h-[240px] w-full flex-col justify-between rounded-[28px] p-7 text-left text-ink transition ${background} ${extra}`}
    >
      <span
        aria-hidden="true"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-xl font-extrabold text-white"
      >
        {number}
      </span>
      <span>
        <strong className="block line-clamp-2 break-words text-[28px] leading-tight">{title}</strong>
        <span className="text-lg">{artist}</span>
      </span>
    </button>
  )
}