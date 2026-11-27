import Button from '../shared/ui/Button'
import type { Question } from '../entities/buildQuestions'
import type { LastAnswer } from '../entities/useGameStore'

interface Props {
    lastAnswer: LastAnswer
    current: Question
    onNext: () => void
}

export default function AnswerFeedback({ lastAnswer, current, onNext }: Props) {
    return (
        <>
            <div className="flex items-center justify-between rounded-[28px] bg-white/16 px-8 py-5">
                <p className="text-2xl font-bold">
                    {lastAnswer.isCorrect
                        ? `Верно! +${lastAnswer.points}`
                        : `Мимо! Это была «${current.correct.trackName}» — ${current.correct.artistName}`}
                </p>
                <Button
                    onClick={onNext}
                    className="h-16 px-10 cursor-pointer"
                >
                    Дальше
                </Button>
            </div>
        </>
    )
}
