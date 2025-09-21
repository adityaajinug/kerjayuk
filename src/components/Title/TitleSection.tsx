interface Props {
    title: string
}

export default function TitleSection({ title }: Props) {
    return (
        <>
            <h3 className="text-base font-bold mb-3">{title}</h3>
        </>
    )
}