export interface ArtistCardProps {
    name: string
    imageUrl: string
    photos: number
}

export function ArtistCard(props: ArtistCardProps) {
    return (
        <div className="center h-36 w-80 bg-card group hover:bg-logo gap-10">
            <img src={props.imageUrl} alt={props.name} />
            <div>
                <p className="text-xl font-medium">{props.name}</p>
                <p className="text-logo text-xl font-medium group-hover:text-white">{props.photos} fotografias</p>
            </div>
        </div>
    )
}
