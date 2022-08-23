export function Statistics() {
    return (
        <div className="border-b border-subtitle">
            <div className="grid grid-cols-6 grid-rows-[1fr_fit-content] sm:grid-cols-1 sm:mt-5">
                <div className="col-span-1 row-span-2 flex flex-col justify-center gap-10 border-r border-subtitle sm:flex-row sm:border-r-0">
                    <p className="text-5xl text-center font-semibold lg:text-3xl animate-in slide-in-from-left-full duration-300">10K+ <small className="block text-xl text-subtitle lg:text-base">Artes</small></p>
                    <p className="text-5xl text-center font-semibold lg:text-3xl animate-in slide-in-from-left-full duration-300 delay-100 fill-mode-backwards">200+ <small className="block text-xl text-subtitle lg:text-base">Vendas</small></p>
                    <p className="text-5xl text-center font-semibold lg:text-3xl animate-in slide-in-from-left-full duration-300 delay-200 fill-mode-backwards">20 <small className="block text-xl text-subtitle lg:text-base">Artistas</small></p>
                </div>
                <div className="col-span-5 row-span-1 flex items-center p-10 gap-10 lg:p-5 lg:gap-5 sm:flex-col">
                    <div className="text-lg lg:text-base sm:text-sm sm:text-justify animate-in fade-in-0 duration-500">
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <u className="text-logo">Illo officiis</u> at sapiente aliquam eum omnis pariatur labore cupiditate. Illo enim tempore rem eligendi. Sed, consequatur quo cupiditate unde aspernatur id?</p>
                        </blockquote>
                        <p className="mt-10 sm:mt-2 sm:text-end"><u>Lorem Ipsum</u></p>
                    </div>
                    <div className="text-lg lg:text-base sm:text-sm sm:text-justify  animate-in fade-in-0 duration-500">
                        <blockquote>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <u className="text-logo">Eaque et alias</u> porro? Sapiente cum similique vel, quo unde libero asperiores rerum! Numquam, enim placeat. Quia incidunt aliquam ipsam vero at!</p>
                        </blockquote>
                        <p className="mt-10 sm:mt-2 sm:text-end"><u>Lorem Ipsum</u></p>
                    </div>
                </div>
                <img src="/assets/images/banner.png" alt="Banner" className="col-span-5 row-span-1 w-full"></img>
            </div>
        </div>
    )
}
