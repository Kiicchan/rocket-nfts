import { useEffect, useState } from "react"

const glass = "backdrop-blur border-b !border-white/10 bg-white/5"

export function Header() {
    const [isOnTop, setIsOnTop] = useState(true)

    useEffect(() => {
        const listener: EventListener = () => {
            if (window.scrollY > 0) {
                setIsOnTop(false)
            } else {
                setIsOnTop(true)
            }
        }
        window.addEventListener("scroll", listener)

        return () => { window.removeEventListener('scroll', listener) }
    }, [isOnTop])

    return (
        <div className={`fixed top-0 left-0 right-0 z-10 border-[transparent] ${!isOnTop && glass} transition-all`}>
            <header className="container mx-auto py-14 flex items-center justify-between">
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
                <button className="w-56 h-12 bg-white text-black font-bold text-base center gap-4 active:bg-logo active:border-2 hover:opacity-90">
                    <img src="/assets/icons/logo_MetaMask.svg" alt="Fox" />
                    Conectar Carteira
                </button>
            </header>
        </div>
    )
}
