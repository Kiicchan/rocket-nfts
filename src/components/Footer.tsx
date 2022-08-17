export function Footer() {
    return (
        <footer className="bg-card">
            <div className="">
                <div className="container flex justify-between py-10">
                    <img src="/assets/icons/logo.svg" alt="logo" />
                    <button className="center bg-logo h-20 w-20"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <img src="/assets/icons/arrow-black.svg" alt="arrow-black" />
                    </button>
                </div>
                <div className="border-y border-subtitle">
                    <div className="container grid grid-cols-[1fr_2fr]">
                        <div className="flex flex-col py-10">
                            <p className="mb-6 text-3xl font-medium">Fique por dentro de <strong className="text-logo block">todas as novidades</strong></p>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input className="bg-input text-subtitle focus:outline focus:outline-logo text-xl p-2"
                                    type="email"
                                    name="news-letter-signup"
                                    id="news-letter-signup"
                                    placeholder="Informe seu email..." />
                                <button className="bg-white text-black font-bold text-xl p-2 border-none active:shadow-inner active:shadow-black"
                                    type={"submit"}>Enviar</button>
                            </form>
                        </div>
                        <div className="flex justify-around text-xl border-l border-subtitle py-10">
                            <div>
                                <h3 className="font-bold mb-2">Empresa</h3>
                                <ul className="font-normal text-subtitle [&>*]:mb-2">
                                    <li><a href="#">Sobre</a></li>
                                    <li><a href="#">Serviços</a></li>
                                    <li><a href="#">Time</a></li>
                                    <li><a href="#">Carreira</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Mapa</h3>
                                <ul className="font-normal text-subtitle [&>*]:mb-2">
                                    <li><a href="#">Galeria</a></li>
                                    <li><a href="#">Populares</a></li>
                                    <li><a href="#">Vendas</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Links</h3>
                                <ul className="font-normal text-subtitle [&>*]:mb-2">
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Termos</a></li>
                                    <li><a href="#">Política</a></li>
                                    <li><a href="#">Ajuda</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container flex justify-between py-10">
                    <a className="text-subtitle text-xl" href="https://github.com/Kiicchan" target={"_blank"}>github.com/Kiicchan</a>
                    <div className="flex gap-12">
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
            </div>
        </footer>
    )
}
