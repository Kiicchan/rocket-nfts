import { HTMLAttributes, LinkHTMLAttributes } from "react"

export interface ArtistCardProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    name: string
    imageUrl: string
    photos: number
}

export function ArtistCard({ imageUrl, name, photos, ...rest }: ArtistCardProps) {
    return (
        <a {...rest}>
            <div className="center h-36 w-80 bg-card group hover:bg-logo transition-colors gap-10 lg:h-28 lg:w-64 lg:gap-5">
                <img src={imageUrl} alt={name} height="100" width="100" className="lg:w-20" />
                <div className="text-xl font-medium lg:text-base">
                    <p>{name}</p>
                    <p className="text-logo group-hover:text-white">{photos} fotografias</p>
                </div>
            </div>
        </a>
    )
}
