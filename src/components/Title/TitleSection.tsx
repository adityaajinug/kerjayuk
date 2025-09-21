interface Props {
    title: string
}

export default function TitleSection({ title }: Props) {
    return (
        <>
            <h3 className="text-sm font-bold mb-3">{title}</h3>
        </>
    )
}