import { create } from 'zustand'
import type { Question } from './buildQuestions'

export type Status = 'idle' | 'playing' | 'answered' | 'finished'

export interface LastAnswer {
  selectedId: number | null
  isCorrect: boolean
  points: number
}

interface GameState {
  questions: Question[]
  round: number
  score: number
  streak: number
  bestStreak: number
  correctCount: number
  status: Status
  lastAnswer: LastAnswer | null
  startGame: (questions: Question[]) => void
  submitAnswer: (trackId: number | null, secondsLeft: number) => void
  nextRound: () => void
  resetGame: () => void
}

const ROUND_TIME = 30

const initialState = {
  questions: [] as Question[],
  round: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  correctCount: 0,
  status: 'idle' as Status,
  lastAnswer: null as LastAnswer | null,
}

function getMultiplier(streak: number) {
  if (streak >= 5) return 2
  if (streak >= 3) return 1.5
  return 1
}

export const useGameStore = create<GameState>()((set, get) => ({
  ...initialState,

  startGame: (questions) =>
    set({
      ...initialState,
      questions,
      status: questions.length > 0 ? 'playing' : 'idle',
    }),

  submitAnswer: (trackId, secondsLeft) => {
    const { questions, round, status, streak, score, bestStreak, correctCount } = get()
    if (status !== 'playing') return

    const question = questions[round]
    const isCorrect = trackId !== null && trackId === question.correct.trackId

    if (!isCorrect) {
      set({
        streak: 0,
        status: 'answered',
        lastAnswer: { selectedId: trackId, isCorrect: false, points: 0 },
      })
      return
    }

    const newStreak = streak + 1
    const speedBonus = Math.round((secondsLeft / ROUND_TIME) * 50)
    const points = Math.round((100 + speedBonus) * getMultiplier(newStreak))

    set({
      score: score + points,
      streak: newStreak,
      bestStreak: Math.max(bestStreak, newStreak),
      correctCount: correctCount + 1,
      status: 'answered',
      lastAnswer: { selectedId: trackId, isCorrect: true, points },
    })
  },

  nextRound: () => {
    const { round, questions } = get()
    const next = round + 1

    if (next >= questions.length) {
      set({ status: 'finished' })
    } else {
      set({ round: next, status: 'playing', lastAnswer: null })
    }
  },

  resetGame: () => set(initialState),
}))