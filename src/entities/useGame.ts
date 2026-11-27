import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { useGameStore } from './useGameStore'
import { useCountdown } from './useCountdown'
import { useTracks } from './useTracks'
import { buildQuestions } from './buildQuestions'
import type { Track } from './getTracks'
import type { CardState } from '../widgets/SongCard'

const TOTAL = 30

export function useGame() {
  const [searchParams] = useSearchParams()
  const genre = searchParams.get('genre') ?? 'Rock'
  const artist = searchParams.get('artist')
  const roundsCount = Number(searchParams.get('rounds') ?? 10)

  const round = useGameStore((s) => s.round)
  const status = useGameStore((s) => s.status)
  const streak = useGameStore((s) => s.streak)
  const score = useGameStore((s) => s.score)
  const lastAnswer = useGameStore((s) => s.lastAnswer)
  const questions = useGameStore((s) => s.questions)
  const startGame = useGameStore((s) => s.startGame)
  const submitAnswer = useGameStore((s) => s.submitAnswer)
  const nextRound = useGameStore((s) => s.nextRound)
  const resetGame = useGameStore((s) => s.resetGame)

  const { secondsLeft, reset } = useCountdown(TOTAL, () => submitAnswer(null, 0))

  const { data: tracks, isPending, isError, error } = useTracks({ genre, artist })

  const builtQuestions = useMemo(
    () => (tracks ? buildQuestions(tracks, roundsCount) : []),
    [tracks, roundsCount],
  )

  useEffect(() => {
    if (builtQuestions.length > 0 && status === 'idle') {
      startGame(builtQuestions)
      reset()
    }
  }, [builtQuestions, status, startGame, reset])

  useEffect(() => {
    return () => resetGame()
  }, [resetGame])

  const current = questions[round]

  function getCardState(track: Track): CardState {
    if (status !== 'answered' || !current) return 'default'
    if (track.trackId === current.correct.trackId) return 'correct'
    if (track.trackId === lastAnswer?.selectedId) return 'wrong'
    return 'dimmed'
  }

  function answer(trackId: number) {
    submitAnswer(trackId, secondsLeft)
  }

  function next() {
    nextRound()
    reset()
  }

  return {
    isPending,
    isError,
    error,
    hasQuestions: builtQuestions.length > 0,
    status,
    current,
    round,
    totalRounds: questions.length,
    roundTime: TOTAL,
    streak,
    score,
    lastAnswer,
    secondsLeft,
    getCardState,
    answer,
    next,
  }
}