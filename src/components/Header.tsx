import { useEffect, useState } from "react"

const glass = "backdrop-blur-sm border-b border-white/10 bg-white/5"

export function Header() {
    const [isOnTop, setIsOnTop] = useState(true)
    const [openMenu, setOpenMenu] = useState(false)

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
        <div className={`fixed top-0 left-0 right-0 z-10 ${!isOnTop || openMenu ? glass : 'py-10 lg:py-0 border-[transparent]'} transition-all duration-500`}>
            <header className="animate-in fade-in-0 slide-in-from-top-full duration-1000 container py-4 lg:py-2 flex items-center justify-between md:flex-col md:items-stretch md:gap-0">
                <div className="flex justify-between">
                    <h1 className="text-4xl lg:text-2xl font-bold select-none cursor-default">Rocket <strong className="text-logo">NFTs</strong></h1>
                    <button className="hidden md:block"
                        title="toggle menu"
                        type="button"
                        onClick={() => setOpenMenu(s => !s)}>
                        <img className={`transition-transform duration-500 ${openMenu ? 'rotate-12' : 'rotate-[192deg]'}`}
                            src="/assets/icons/arrow-white.svg" title="toggle arrow" />
                    </button>
                </div>
                <nav className={`transition-all duration-500 ${openMenu ? 'md:opacity-100 md:h-32' : 'md:opacity-0 md:h-0 md:overflow-hidden'}`}>
                    <ul className="center gap-14 text-lg lg:gap-5 lg:text-base md:flex-col md:items-stretch md:gap-0
                        [&>li>a]:p-2 [&>li]:border [&>li]:border-[transparent] [&>li]:rounded [&>li:hover]:border-white">
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
                <div className={`transition-all duration-500 ${openMenu ? 'md:opacity-100 md:h-12' : 'md:opacity-0 md:h-0 md:overflow-hidden'}`}>
                    <button className={`w-full p-2 bg-[transparent] text-white border rounded font-bold text-base center gap-4
                        lg:font-normal hover:brightness-90 active:brightness-75`}
                        type={"button"}>
                        <img src="/assets/icons/logo_MetaMask.svg" alt="Fox" />
                        <p className="">Conectar Carteira</p>
                    </button>
                </div>
            </header>
        </div>
    )
}
