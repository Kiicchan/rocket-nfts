const artistsURLs = [
    "/assets/images/artista-1.png",
    "/assets/images/artista-2.png",
    "/assets/images/artista-3.png",
    "/assets/images/artista-4.png",
]

const galleryURLs = [
    "/assets/images/galeria-1.png",
    "/assets/images/galeria-2.png",
    "/assets/images/galeria-3.png",
    "/assets/images/galeria-4.png",
    "/assets/images/galeria-5.png",
    "/assets/images/galeria-6.png",
    "/assets/images/galeria-7.png",
    "/assets/images/galeria-8.png",
]

export function MainSection() {
    return (
        <section className="bg-grid bg-cover bg-center bg-no-repeat lg:bg-repeat lg:bg-auto pt-48 lg:pt-20">
            <div className="grid grid-cols-[2fr_3fr_200px] container gap-10 lg:gap-5 xl:grid-cols-[2fr_1fr] sm:grid-cols-1">
                <div className="flex flex-col justify-between gap-4 text-lg xl:text-sm xl:order-1 duration-1000 animate-in slide-in-from-left-full fade-in-0">
                    <p>Mercado digital para colecionáveis em criptos e tokens não fungíveis (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
                    <div className="flex items-end">
                        <div className="image-stack relative h-20 w-40">
                            {artistsURLs.map((url, index) => <img className="absolute hover:translate-x-4 last:hover:translate-x-0 peer peer-hover:-translate-x-4 transition-transform"
                                style={{ left: index * 26 }}
                                height={"80"}
                                width={"80"}
                                key={url}
                                src={url}
                                alt={`artista-${index + 1}`}
                            ></img>).reverse()}
                        </div>
                        <p className="flex-1 ml-1">
                            <strong className="block">+10</strong>
                            Artistas selecionados
                        </p>
                    </div>
                </div>
                <h2 className="text-5xl lg:text-4xl sm:text-3xl font-bold sm:text-center animate-in fade-in-0 duration-1000">
                    Descubra a verdadeira arte digital e colecione diversas <strong className="text-logo">NFTs</strong>
                </h2>
                <div className="center xl:row-span-2 sm:row-span-1">
                    <img className="relative hover:rotate-[360deg] duration-1000 animate-in slide-in-from-right-full fade-in-0 spin-in-180"
                        src="/assets/icons/badge.svg"
                        alt="Badge" />
                </div>
            </div>
            <div className="container flex flex-wrap justify-evenly gap-10 mt-20 lg:gap-5 lg:mt-10 sm:mt-5">
                {galleryURLs.map((url, index) => <img className="border hover:scale-110 transition-transform cursor-pointer animate-in zoom-in-150 fade-in-0 fill-mode-backwards duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                    src={url}
                    width="308"
                    key={url}
                    alt={`photo-${index + 1}`}
                ></img>)}
            </div>
        </section>
    )
}
