import { useState } from "react"

type HeaderProops={
    irLogin:()=>void
    createACount:()=>void
    Home:()=> void
}
const Header = ({irLogin,createACount,Home}:HeaderProops) => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Blog", path: "javascript:void(0)" },
        { title: "Usuarios", path: "javascript:void(0)" },
        { title: "Soporte", path: "javascript:void(0)" },
        

    ]

    return (
        <>
        <div className="border-3 border-blue-500 mt-5">
            <nav className="relative items-center pt-1 px-1 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 ">
                <div className="flex justify-between ">
                    
                    <a onClick={()=>Home()}>
                        <img
                            src="https://i.imgur.com/cRzyIas.jpeg"
                            width={120}
                            height={50}
                            alt="Meditrack"
                        />
                    
                    </a>
                    <div className="flex items-center">  
                        <h1 className="font-black  text-center text-2xl">Meditrack</h1>
                    </div>
                    <button className="text-gray-500 outline-none md:hidden"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
                    <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                    </div>
                    <li className="order-2 py-5 md:py-0">
                        <a onClick={()=>irLogin()} className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline">
                            Ir a la app
                        </a>
                    </li>
                </ul>
            
            </nav>
            </div>
            <section className="py-18">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-blue-500 font-medium">
                            La salud y IA en un solo sitio
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                           Monitorea cambios, detecta patrones y actúa antes  
                        </h2>
                        <p>
                            MediTrack es una aplicación que te acompaña en el cuidado de tu salud día a día. Te ayuda a recordar fechas importantes, registrar tu estado físico y emocional, y generar reportes que fortalecen la comunicación con tu médico.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a onClick={()=>createACount()} className="block py-2 px-4 text-center text-white font-medium bg-blue-500 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                               Empezar
                            </a>
                            <a onClick={()=>irLogin()} className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-white hover:bg-blue-400 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Obtener acceso
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="https://i.imgur.com/BFIp36J.png"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
               
            </section>
            
        </>
    )
}



export default Header;