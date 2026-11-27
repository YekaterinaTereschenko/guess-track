import BubbleSpan from '../shared/ui/BubbleSpan'

interface Props {
    round: number
    totalRounds: number
    streak: number
    score: number
}

export default function GameHeader({ round, totalRounds, streak, score }: Props) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-6">
                <BubbleSpan color="bg-ink" title={`Раунд ${round + 1} из ${totalRounds}`} />
                <BubbleSpan color="bg-pink" title={`Серия ${streak}`} />
            </div>
            <span className="text-5xl font-extrabold text-accent">{score}</span>
        </div>
    )
}