const artistsURLs = [
    "/src/assets/images/artista-1.png",
    "/src/assets/images/artista-2.png",
    "/src/assets/images/artista-3.png",
    "/src/assets/images/artista-4.png",
]

export function MainSection() {
    return (
        <section className="bg-grid bg-cover bg-no-repeat pt-48">
            <div className="flex items-center justify-between container mx-auto gap-10">
                <div className="flex flex-col gap-4 basis-[400px]">
                    <p className="text-lg">Mercado digital para colecionáveis em criptos e tokens não fungíveis (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
                    <div className="flex items-end">
                        <div className="image-stack inline-block w-32">
                            {artistsURLs.map((url, index, arr) => <img className="inline w-20 h-20 -mr-16 relative"
                                style={{ zIndex: arr.length - index }}
                                key={url}
                                src={url}
                                alt={`artista-${index + 1}`}
                            ></img>)}
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
                    <img src="/src/assets/icons/badge.svg" alt="Badge" />
                </div>
            </div>
        </section>
    )
}
