export interface ArtistCardProps {
    name: string
    imageUrl: string
    photos: number
}

export function ArtistCard(props: ArtistCardProps) {
    return (
        <a href="#">
            <div className="center h-36 w-80 bg-card group hover:bg-logo transition-colors gap-10 lg:h-28 lg:w-64 lg:gap-5">
                <img src={props.imageUrl} alt={props.name} height="100" width="100" className="lg:w-20" />
                <div className="text-xl font-medium lg:text-base">
                    <p>{props.name}</p>
                    <p className="text-logo group-hover:text-white">{props.photos} fotografias</p>
                </div>
            </div>
        </a>
    )
}
