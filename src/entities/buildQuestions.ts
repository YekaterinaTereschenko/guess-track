import { shuffle } from '../shared/lib/shuffle'
import type { Track } from './getTracks'

export interface Question {
  correct: Track
  options: Track[]
}

export function buildQuestions(tracks: Track[], count: number): Question[] {
  const roundTracks = shuffle(tracks).slice(0, count)

  return roundTracks.flatMap((correct) => {
    const candidates = tracks.filter(
      (track) =>
        track.trackId !== correct.trackId && track.trackName !== correct.trackName,
    )

    const otherArtists = candidates.filter(
      (track) => track.artistName !== correct.artistName,
    )
    const pool = otherArtists.length >= 3 ? otherArtists : candidates

    if (pool.length < 3) return []

    const wrong = shuffle(pool).slice(0, 3)

    return [{ correct, options: shuffle([correct, ...wrong]) }]
  })
}