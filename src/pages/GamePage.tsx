import SongCard from '../widgets/SongCard'
import TimerCard from '../widgets/TimerCard'
import BubbleSpan from '../shared/ui/BubbleSpan'
import { useSearchParams } from 'react-router'
import { useTracks } from '../entities/useTracks'
import { useMemo } from 'react'
import { buildQuestions } from '../entities/buildQuestions'

const colors = ['bg-accent', 'bg-pink', 'bg-ocean', 'bg-white'] as const

const options = [
  { id: 1, title: 'Hotel California', artist: 'Eagles' },
  { id: 2, title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
  { id: 3, title: 'Sweet Child O’ Mine', artist: 'Guns N’ Roses' },
  { id: 4, title: 'Bohemian Rhapsody', artist: 'Queen' },
]

export default function GamePage() {
  const [searchParams] = useSearchParams()
  const genre = searchParams.get('genre') ?? 'Rock'
  const artist = searchParams.get('artist')
  const roundsCount = Number(searchParams.get('rounds') ?? 10)

  const { data: tracks, isPending, isError, error } = useTracks({ genre, artist })

  const questions = useMemo(
    () => (tracks ? buildQuestions(tracks, roundsCount) : []),
    [tracks, roundsCount],
  )

  if (isPending) return <p>Загрузка...</p>
  if (isError) return <p>Ошибка: {error.message}</p>
  if (questions.length === 0) return <p>Не нашли достаточно песен, попробуйте другого исполнителя</p>

  return (
    <section className="flex flex-col gap-6 mx-auto max-w-[1312px] px-16 py-4">
      <div className="flex gap-6">
        <BubbleSpan color='bg-ink' title={`Раунд 1 из 10`} />
        <BubbleSpan color='bg-pink' title={`Серия 1`} />
      </div>
      <div className="flex gap-6">
        <TimerCard />
        <div className="grid grid-cols-2 gap-5">
          {options.map((option, index) => (
            <SongCard
              key={option.id}
              number={index + 1}
              color={colors[index]}
              artist={option.artist}
              title={option.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}