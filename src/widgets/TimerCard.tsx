import type { Track } from '../entities/getTracks'
import PlayButton from "../shared/ui/PlayButton";

interface Props {
    correct: Track
    secondsLeft: number
    total: number
}

export default function TimerCard({ correct, secondsLeft, total }: Props) {
    const CIRCLE = 603.2

    return (
        <div className="flex w-full max-w-[420px] flex-col items-center justify-between gap-8 rounded-[28px] bg-white p-10 text-ink">
            <h1 className="text-center text-[32px] font-extrabold leading-tight">
                Что это за песня?
            </h1>

            <div className="relative h-[220px] w-[220px]"
            >
                <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
                    <circle
                        cx="110"
                        cy="110"
                        r="96"
                        fill="none"
                        strokeWidth="16"
                        className="stroke-muted/40"
                    />
                    <circle
                        cx="110"
                        cy="110"
                        r="96"
                        fill="none"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={`${(CIRCLE * secondsLeft) / total} ${CIRCLE}`}
                        transform="rotate(-90 110 110)"
                        className="stroke-brand"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[64px] font-extrabold">
                    {secondsLeft}
                </span>
            </div>

            <PlayButton previewUrl={correct.previewUrl} />

            <p className="text-base text-ink/60">Отрывок 30 секунд</p>
        </div>
    )
}