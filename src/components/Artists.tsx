import { ArtistCard, ArtistCardProps } from "./ArtistCard";

const artists: ArtistCardProps[] = [
    { name: "Mayk Brito", photos: 80, imageUrl: "/assets/images/artista-1.png" },
    { name: "Jakeline G.", photos: 99, imageUrl: "/assets/images/artista-2.png" },
    { name: "João I. (Biro)", photos: 50, imageUrl: "/assets/images/artista-3.png" },
    { name: "Tamires Santos", photos: 43, imageUrl: "/assets/images/artista-4.png" },
    { name: "Ana Silva", photos: 28, imageUrl: "/assets/images/artista-5.png" },
    { name: "Diego F.", photos: 20, imageUrl: "/assets/images/artista-6.png" },
]

export function Artists() {
    return (
        <section className="container sm:border-t sm:border-subtitle">
            <h2 className="text-5xl font-bold my-36 text-center lg:text-3xl lg:my-10 sm:my-5">Melhores <strong className="text-logo">artistas</strong></h2>
            <div className="flex flex-wrap gap-28 justify-between lg:justify-center lg:gap-10">
                {artists.map(artist => <ArtistCard key={artist.name} {...artist} />)}
            </div>
            <div className="center mt-12 mb-36 lg:my-10 sm:mb-5">
                <a className="text-xl flex gap-4" href="#">Ver todos os artistas <img src="/assets/icons/arrow-orange.svg" alt="" /></a>
            </div>
        </section>
    )
}
