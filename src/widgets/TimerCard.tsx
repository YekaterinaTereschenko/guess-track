import { useEffect, useState } from "react";
import { useCountdown } from "../entities/useCountdown";

export default function TimerCard() {
    const TOTAL = 15
    const CIRCLE = 603.2

    const { secondsLeft, reset } = useCountdown(TOTAL, () => {
        console.log('время вышло')
    })

    return (
        <div className="flex w-full max-w-[420px] flex-col items-center justify-between gap-8 rounded-[28px] bg-white p-10 text-ink">
            <h1 className="text-center text-[32px] font-extrabold leading-tight">
                Что это за песня?
            </h1>

            <div
                role="img"
                className="relative h-[220px] w-[220px]"
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
                        strokeDasharray={`${(CIRCLE * secondsLeft) / TOTAL} ${CIRCLE}`}
                        transform="rotate(-90 110 110)"
                        className="stroke-brand"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[64px] font-extrabold">
                    {secondsLeft}
                </span>
            </div>

            <button
                type="button"
                aria-label="Воспроизвести отрывок"
                className="flex h-24 w-24 items-center justify-center rounded-full bg-accent text-ink transition hover:opacity-90"
            >
                <svg width="42" height="42" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
            </button>

            <p className="text-base text-ink/60">Отрывок 30 секунд</p>
        </div>
    )
}