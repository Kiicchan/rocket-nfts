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
            <div className="flex items-center justify-between container gap-10">
                <div className="flex flex-col gap-4 basis-[400px]">
                    <p className="text-lg">Mercado digital para colecionáveis em criptos e tokens não fungíveis (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
                    <div className="flex items-end">
                        <div className="image-stack relative h-20 w-40">
                            {artistsURLs.map((url, index, arr) => <img className="w-20 h-20 absolute"
                                style={{ left: index * 26 }}
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
                <h2 className="text-5xl font-bold basis-[600px]">
                    Descubra a verdadeira arte digital e colecione diversas <strong className="text-logo">NFTs</strong>
                </h2>
                <div className="center basis-[200px]">
                    <img src="/assets/icons/badge.svg" alt="Badge" />
                </div>
            </div>
            <div className="mt-20 container grid grid-cols-4 gap-y-20 gap-x-10">
                {galleryURLs.map((url, index) => <img className="border border-white w-full"
                    src={url}
                    key={url}
                    alt={`photo-${index + 1}`}
                ></img>)}
            </div>
        </section>
    )
}
