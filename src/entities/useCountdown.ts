import { useCallback, useEffect, useRef, useState } from 'react'

export function useCountdown(seconds: number, onFinish?: () => void) {
    const [secondsLeft, setSecondsLeft] = useState(seconds)
    const [runId, setRunId] = useState(0)
    const onFinishRef = useRef(onFinish)
    const isFinished = secondsLeft === 0

    useEffect(() => {
        onFinishRef.current = onFinish
    })

    useEffect(() => {
        if (isFinished) return

        const id = setInterval(() => {
            setSecondsLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(id)
    }, [runId, isFinished])

    useEffect(() => {
        if (isFinished) onFinishRef.current?.()
    }, [isFinished])

    const reset = useCallback(() => {
        setSecondsLeft(seconds)
        setRunId((id) => id + 1)
    }, [seconds])

    return { secondsLeft, isFinished, reset }
}