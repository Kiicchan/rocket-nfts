import { useInView } from "@/hooks/useInView";
import { Card, CardProps } from "./Card";

const arts: CardProps[] = [
    { title: "Astronauta 1", artist: "Mayk Brito", price: 1.50, imgURL: "/assets/images/astronauta 1.png" },
    { title: "Astronauta 2", artist: "Jakeliny Gracielly", price: 2.0, imgURL: "/assets/images/astronauta-2.png" },
    { title: "Astronauta 3", artist: "João Inácio (Biro)", price: 3.75, imgURL: "/assets/images/astronauta-3.png" },
    { title: "Astronauta 4", artist: "Tamires Santos", price: 4.30, imgURL: "/assets/images/astronauta-4.png" },
]

const animation = "fade-in-0 fade-out-0 slide-in-from-left-20 slide-out-to-right-20 duration-1000 fill-mode-both"
export function Popular() {
    const { isInView, elementRef } = useInView()

    return (
        <section className="container" ref={elementRef}>
            <h2 className="text-5xl font-bold my-36 text-center lg:text-3xl lg:my-10 sm:my-5"><strong className="text-logo">Populares</strong> da semana</h2>
            <div className="grid grid-cols-2 place-items-center gap-y-20 lg:gap-y-10 lg:gap-x-10 sm:grid-cols-1
                bg-gradient-to-t from-subtitle to-subtitle bg-center bg-[length:1px_100%] bg-no-repeat sm:bg-none">
                {arts.map((artProps, position) => <Card key={artProps.title} {...artProps} href="#"
                    className={`${animation} ${isInView ? "animate-in" : "animate-out"}`}
                    style={{ animationDelay: `${100 * position}ms` }} />
                )}
            </div>
        </section>
    )
}
