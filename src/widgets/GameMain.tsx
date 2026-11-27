import SongCard, { type CardState } from './SongCard'
import TimerCard from './TimerCard'
import type { Question } from '../entities/buildQuestions'
import type { Track } from '../entities/getTracks'

const colors = ['bg-accent', 'bg-pink', 'bg-ocean', 'bg-white'] as const

interface Props {
  current: Question
  secondsLeft: number
  total: number
  getCardState: (track: Track) => CardState
  onAnswer: (trackId: number) => void
}

export default function GameMain({ current, secondsLeft, total, getCardState, onAnswer }: Props) {
  return (
    <div className="flex gap-6">
      <TimerCard correct={current.correct} secondsLeft={secondsLeft} total={total} />

      <div className="grid flex-1 min-w-0 auto-rows-fr grid-cols-2 gap-5">
        {current.options.map((track, index) => (
          <SongCard
            key={track.trackId}
            number={index + 1}
            color={colors[index]}
            artist={track.artistName}
            title={track.trackName}
            state={getCardState(track)}
            onClick={() => onAnswer(track.trackId)}
          />
        ))}
      </div>
    </div>
  )
}