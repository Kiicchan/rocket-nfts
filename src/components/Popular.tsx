import { Card, CardProps } from "./Card";

const arts: CardProps[] = [
    { title: "Astronauta 1", artist: "Mayk Brito", price: 1.50, imgURL: "/assets/images/astronauta 1.png" },
    { title: "Astronauta 2", artist: "Jakeliny Gracielly", price: 2.0, imgURL: "/assets/images/astronauta-2.png" },
    { title: "Astronauta 3", artist: "João Inácio (Biro)", price: 3.75, imgURL: "/assets/images/astronauta-3.png" },
    { title: "Astronauta 4", artist: "Tamires Santos", price: 4.30, imgURL: "/assets/images/astronauta-4.png" },
]

export function Popular() {
    return (
        <section className="container mx-auto">
            <h2 className="text-5xl font-bold my-36"><strong className="text-logo">Populares</strong> da semana</h2>
            <div className="grid grid-cols-[repeat(2,max-content)] place-content-between gap-y-20 bg-gradient-to-t from-subtitle to-subtitle bg-center bg-[length:1px_100%] bg-no-repeat">
                {arts.map(artProps => <Card key={artProps.title} {...artProps} />)}
            </div>
        </section>
    )
}
