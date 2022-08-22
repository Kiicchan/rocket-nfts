export interface CardProps {
    title: string
    artist: string
    price: number
    imgURL: string
}

export function Card(props: CardProps) {
    return (
        <div className="w-fit group">
            <a href="#">
                <h3 className="flex justify-between text-3xl font-medium mb-10 lg:text-xl lg:mb-5 sm:mb-1">{props.title}
                    <img src="/assets/icons/arrow-white.svg" alt="white arrow" className="group-hover:animate-ping" />
                </h3>
                <p className="flex justify-between text-xl text-subtitle font-semibold mb-6 lg:text-base sm:mb-2">{props.artist}
                    <span className="text-logo font-normal">{props.price} RKT</span>
                </p>
                <img src={props.imgURL} alt={props.title} width="350" height="200" />
            </a>
        </div>
    )
}
