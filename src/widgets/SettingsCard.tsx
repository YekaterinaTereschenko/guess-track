import type { SubmitEvent } from 'react'
import Button from '../shared/ui/Button'
import RadioChip from '../shared/ui/RadioChip'
import { useNavigate } from 'react-router'

const genres = ['Rock', 'Pop', 'Hip-Hop', 'Electronic', 'Jazz', 'Metal']
const rounds = ['5', '10', '15']

export default function SettingsCard() {
    const navigate = useNavigate()

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        const genre = String(data.get('genre'))
        const artist = String(data.get('artist')).trim()
        const rounds = String(data.get('rounds'))

        const params = new URLSearchParams({ genre, rounds })
        if (artist) params.set('artist', artist)

        navigate(`/game?${params}`)
    }
    return (
        <div className="rounded-[28px] bg-white p-11 text-ink max-w-[593px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <fieldset className="flex flex-col gap-3">
                    <legend className="mb-3 text-[15px] font-bold text-ink/60">ЖАНР</legend>
                    <div className="flex flex-wrap gap-3">
                        {genres.map((genre, index) => (
                            <RadioChip
                                key={genre}
                                name="genre"
                                value={genre}
                                label={genre}
                                defaultChecked={index === 0}
                            />
                        ))}
                    </div>
                </fieldset>

                <div className="flex flex-col gap-3">
                    <label htmlFor="artist" className="text-[15px] font-bold text-ink/60">
                        ИЛИ ИСПОЛНИТЕЛЬ
                    </label>
                    <input
                        id="artist"
                        name="artist"
                        type="text"
                        placeholder="Например, Queen"
                        className="h-15 rounded-2xl border-2 border-muted px-5 text-lg"
                    />
                </div>

                <fieldset>
                    <legend className="mb-3 text-[15px] font-bold text-ink/60">РАУНДОВ</legend>
                    <div className="flex gap-3">
                        {rounds.map((count) => (
                            <RadioChip
                                key={count}
                                name="rounds"
                                value={count}
                                label={count}
                                defaultChecked={count === '10'}
                                className="flex-1 [&>span]:h-15"
                            />
                        ))}
                    </div>
                </fieldset>
                <Button variant='solid' type='submit'>Начать</Button>
            </form>
        </div>
    )
}