export function Footer() {
    return (
        <footer className="bg-card">
            <div className="container flex items-center justify-between py-10 lg:py-5 sm:py-3">
                <img src="/assets/icons/logo.svg" alt="logo" className="lg:h-5 sm:h-4" />
                <button className="center bg-logo h-20 w-20 rounded-lg hover:-translate-y-2 duration-200 lg:h-14 lg:w-14 lg:p-2 sm:h-10 sm:w-10 sm:p-3"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    type="button">
                        <img src="/assets/icons/arrow-black.svg" alt="arrow-black" />
                    </button>
            </div>
            <div className="border-y border-subtitle">
                <div className="container grid grid-cols-[1fr_2fr] md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex flex-col py-10 pr-10 lg:py-5 sm:pr-0">
                        <p className="mb-6 text-3xl font-medium lg:text-xl lg:mb-2">Fique por dentro de <strong className="text-logo block sm:inline">todas as novidades</strong></p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex sm:justify-around">
                            <input className="bg-input grow text-subtitle focus:outline outline-white mr-[2px] invalid:outline-logo text-xl p-2 lg:text-base"
                                    type="email"
                                    name="news-letter-signup"
                                    id="news-letter-signup"
                                    placeholder="Informe seu email..." />
                            <button className="bg-white border border-black text-black font-bold text-xl p-2 active:brightness-75 lg:text-base"
                                    type={"submit"}>Enviar</button>
                        </form>
                    </div>
                    <div className="flex justify-around text-xl border-l border-subtitle py-10 lg:py-5 lg:text-base sm:border-l-0 sm:border-t">
                            <div>
                            <p className="font-bold mb-2 lg:mb-1">Empresa</p>
                            <ul className="font-normal text-subtitle [&>*]:mb-2 [&>*]:lg:mb-1">
                                    <li><a href="#">Sobre</a></li>
                                    <li><a href="#">Serviços</a></li>
                                    <li><a href="#">Time</a></li>
                                    <li><a href="#">Carreira</a></li>
                                </ul>
                            </div>
                            <div>
                            <p className="font-bold mb-2 lg:mb-1">Mapa</p>
                            <ul className="font-normal text-subtitle [&>*]:mb-2 [&>*]:lg:mb-1">
                                    <li><a href="#">Galeria</a></li>
                                    <li><a href="#">Populares</a></li>
                                    <li><a href="#">Vendas</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </div>
                            <div>
                            <p className="font-bold mb-2 lg:mb-1">Links</p>
                            <ul className="font-normal text-subtitle [&>*]:mb-2 [&>*]:lg:mb-1">
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Termos</a></li>
                                    <li><a href="#">Política</a></li>
                                    <li><a href="#">Ajuda</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container flex justify-between items-center py-8 lg:py-4 sm:py-2">
                <a className="text-subtitle text-xl lg:text-base" href="https://github.com/Kiicchan" target={"_blank"}>github.com/Kiicchan</a>
                <div className="flex gap-12 [&>a]:p-2 lg:gap-4 sm:gap-0">
                        <a href="#">
                            <img src="/assets/icons/email.svg" alt="email" />
                        </a>
                        <a href="#">
                            <img src="/assets/icons/instagram.svg" alt="instagram" />
                        </a>
                        <a href="#">
                            <img src="/assets/icons/twitter.svg" alt="twitter" />
                        </a>
                        <a href="#">
                            <img src="/assets/icons/youtube.svg" alt="youtube" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
