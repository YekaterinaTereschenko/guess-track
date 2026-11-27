import GameHeader from '../widgets/GameHeader'
import GameMain from '../widgets/GameMain'
import ErrorState from '../shared/ui/ErrorState'
import Loader from '../shared/ui/Loader'
import AnswerFeedback from '../widgets/AnswerFeedback'
import GameResult from '../widgets/GameResult'
import { useGame } from '../entities/useGame'

export default function GamePage() {
  const {
    isPending,
    isError,
    error,
    hasQuestions,
    status,
    current,
    round,
    totalRounds,
    roundTime,
    streak,
    score,
    lastAnswer,
    secondsLeft,
    getCardState,
    answer,
    next,
  } = useGame()

  if (isPending) return <Loader />
  if (isError) return <ErrorState message={error?.message} />
  if (!hasQuestions) {
    return <ErrorState message="Не нашли песни этого исполнителя :( Попробуйте выбрать что-то другое" />
  }
  if (status === 'idle' || !current) return <Loader />
  if (status === 'finished') return <GameResult score={score} />

  return (
    <section className="flex flex-col gap-6 mx-auto max-w-[1312px] px-16 py-4">
      <GameHeader round={round} totalRounds={totalRounds} streak={streak} score={score} />

      <GameMain
        current={current}
        secondsLeft={secondsLeft}
        total={roundTime}
        getCardState={getCardState}
        onAnswer={answer}
      />

      {status === 'answered' && lastAnswer && (
        <AnswerFeedback lastAnswer={lastAnswer} current={current} onNext={next} />
      )}
    </section>
  )
}