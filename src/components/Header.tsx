export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 container mx-auto py-14 flex items-center justify-between z-10">
            <h1 className="text-4xl font-bold">Rocket <strong className="text-logo">NFTs</strong></h1>
            <nav>
                <ul className="center gap-14 text-lg">
                    <li>
                        <a href="#">Comprar NFT</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </nav>
            <button className="w-56 h-12 bg-white text-black font-bold text-base center gap-4 active:bg-logo hover:opacity-90">
                <img src="/assets/icons/logo_MetaMask.svg" alt="Fox" />
                Conectar Carteira
            </button>
        </header>
    )
}
