import { useQuery } from '@tanstack/react-query'
import { getTracks, getTracksByGenre } from './getTracks'

interface Params {
  genre: string
  artist: string | null
}

export function useTracks({ genre, artist }: Params) {
  return useQuery({
    queryKey: artist ? ['tracks', 'artist', artist] : ['tracks', 'genre', genre],
    queryFn: () =>
      artist ? getTracks(artist, 100, 'artistTerm') : getTracksByGenre(genre),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  })
}