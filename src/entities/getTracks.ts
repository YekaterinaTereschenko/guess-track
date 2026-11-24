const BASE_URL = 'https://itunes.apple.com/search'

export const GENRE_ARTISTS: Record<string, string[]> = {
  Rock: ['Queen', 'Nirvana', 'Eagles', 'AC/DC', 'Foo Fighters', 'Guns N’ Roses'],
  Pop: ['Taylor Swift', 'Dua Lipa', 'Ed Sheeran', 'Billie Eilish', 'The Weeknd', 'Ariana Grande'],
  'Hip-Hop': ['Eminem', 'Kendrick Lamar', 'Drake', 'Jay-Z', 'Kanye West', '50 Cent'],
  Electronic: ['Daft Punk', 'Calvin Harris', 'Avicii', 'Zedd', 'The Chemical Brothers', 'Deadmau5'],
}

export interface Track {
  trackId: number
  trackName: string
  artistName: string
  collectionName: string
  previewUrl?: string
  artworkUrl100: string
  primaryGenreName: string
}

interface SearchResponse {
  resultCount: number
  results: Track[]
}

export async function getTracks(term: string, limit = 50): Promise<Track[]> {
  const params = new URLSearchParams({
    term,
    entity: 'song',
    limit: String(limit),
  })

  const response = await fetch(`${BASE_URL}?${params}`)

  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status}`)
  }

  const data: SearchResponse = await response.json()
  const withPreview = data.results.filter((track) => track.previewUrl)

  const getKey = (track: Track) =>
    normalizeTitle(track.trackName).toLowerCase() + '|' + track.artistName.toLowerCase()

  const unique = withPreview.filter(
    (track, index) =>
      withPreview.findIndex((other) => getKey(other) === getKey(track)) === index,
  )

  console.log(`Всего: ${data.results.length}, с превью: ${withPreview.length}, уникальных: ${unique.length}`)
  return unique

}

console.log(normalizeTitle('Michael Jackson - Rock with You (Single Version)'));


function normalizeTitle(title: string): string {
  return title
    .replace(/\s*\(feat\..*?\)/gi, "")
    .replace(/\s*\(Radio Edit\)/gi, "")
    .replace(/\s*-\s*Remaster(ed)?.*$/i, "")
    .replace(/\s*\([^)]*?\bVersion\b[^)]*?\)/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim(); 
}