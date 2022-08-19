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
        <section className="bg-grid bg-cover bg-center bg-no-repeat pt-48">
            <div className="grid grid-cols-[2fr_3fr_1fr] container gap-10">
                <div className="flex flex-col gap-4">
                    <p className="text-lg">Mercado digital para colecionáveis em criptos e tokens não fungíveis (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
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
                        <p className="flex-1 text-lg ml-1">
                            <strong className="block">+10</strong>
                            Artistas selecionados
                        </p>
                    </div>
                </div>
                <h2 className="text-5xl font-bold">
                    Descubra a verdadeira arte digital e colecione diversas <strong className="text-logo">NFTs</strong>
                </h2>
                <div className="center">
                    <img className="hover:rotate-[360deg] duration-500"
                        src="/assets/icons/badge.svg"
                        alt="Badge" />
                </div>
            </div>
            <div className="mt-20 container flex flex-wrap justify-between gap-y-10">
                {galleryURLs.map((url, index) => <img className="border hover:scale-110 transition-transform cursor-pointer"
                    src={url}
                    key={url}
                    alt={`photo-${index + 1}`}
                ></img>)}
            </div>
        </section>
    )
}
