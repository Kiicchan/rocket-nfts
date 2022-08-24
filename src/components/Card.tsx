import { LinkHTMLAttributes } from "react"

export interface CardProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    title: string
    artist: string
    price: number
    imgURL: string
}

export function Card({ title, price, imgURL, artist, ...rest }: CardProps) {
    return (
        <a {...rest}>
            <div className="w-fit group">
                <h3 className="flex justify-between text-3xl font-medium mb-10 lg:text-xl lg:mb-5 sm:mb-1">{title}
                    <img src="/assets/icons/arrow-white.svg" alt="white arrow" className="group-hover:animate-ping" />
                </h3>
                <p className="flex justify-between text-xl text-subtitle font-semibold mb-6 lg:text-base sm:mb-2">{artist}
                    <span className="text-logo font-normal">{price} RKT</span>
                </p>
                <img src={imgURL} alt={title} width="350" height="200" />
            </div>
        </a>
    )
}
