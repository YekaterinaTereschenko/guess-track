interface Props {
    color: 'bg-ink' | 'bg-pink'
    title: string
}

export default function BubbleSpan({ color, title }: Props) {
    return (
        <div className={`inline-flex items-center justify-center rounded-full px-6 py-3 ${color} font-bold`}>
            {title}
        </div>
    )
}
