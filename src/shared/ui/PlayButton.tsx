import { useEffect, useRef, useState } from 'react'

interface Props {
  previewUrl?: string
}

export default function PlayButton({ previewUrl }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !previewUrl) return

    audio.play().catch((err) => console.warn('Автозапуск не сработал:', err))

    return () => audio.pause()
  }, [previewUrl])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play().catch((err) => console.warn('Не удалось запустить звук:', err))
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={previewUrl}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={togglePlay}
        disabled={!previewUrl}
        aria-label={isPlaying ? 'Пауза' : 'Воспроизвести отрывок'}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-accent text-ink transition hover:opacity-90 disabled:opacity-40 cursor-pointer"
      >
        {isPlaying ? (
          <svg width="42" height="42" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="42" height="42" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        )}
      </button>
    </>
  )
}