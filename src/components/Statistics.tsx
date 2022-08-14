export function Statistics() {
    return (
        <div className="border-b border-subtitle">
            <div className="grid grid-cols-6 grid-rows-2">
                <div className="col-span-1 row-span-2 flex flex-col justify-center gap-10 border-r border-subtitle">
                    <p className="text-5xl text-center font-semibold">10K+ <small className="block text-xl text-subtitle">Artes</small></p>
                    <p className="text-5xl text-center font-semibold">200+ <small className="block text-xl text-subtitle">Vendas</small></p>
                    <p className="text-5xl text-center font-semibold">20 <small className="block text-xl text-subtitle">Artistas</small></p>
                </div>
                <div className="col-span-5 row-span-1 flex items-center">
                    <div className="text-lg mx-10">
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <u className="text-logo">Illo officiis</u> at sapiente aliquam eum omnis pariatur labore cupiditate. Illo enim tempore rem eligendi. Sed, consequatur quo cupiditate unde aspernatur id?</p>
                        </blockquote>
                        <p className="mt-10"><u>Lorem Ipsum</u></p>
                    </div>
                    <div className="text-lg mx-10">
                        <blockquote>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <u className="text-logo">Eaque et alias</u> porro? Sapiente cum similique vel, quo unde libero asperiores rerum! Numquam, enim placeat. Quia incidunt aliquam ipsam vero at!</p>
                        </blockquote>
                        <p className="mt-10"><u>Lorem Ipsum</u></p>
                    </div>
                </div>
                <img src="/assets/images/banner.png" alt="Banner" className="col-span-5 row-span-1 w-full"></img>
            </div>
        </div>
    )
}
