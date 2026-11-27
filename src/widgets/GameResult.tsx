interface Props {
    score: number
}

export default function GameResult({ score }: Props) {
    return (
        <section className="mx-auto max-w-[1312px] px-16 py-4 text-center">
            <h1 className="text-[32px] font-semibold">Игра окончена</h1>
            <p className="text-[120px] font-black text-accent">{score}</p>
        </section>
    )
}
