// import Link from 'next/link'
// import { formatDate, getBlogPosts } from 'app/blog/utils'
import Image from "next/image";

export default function Brand() {

    return (
        <section className="brand">
            <h2 className="brand-title text-6xl text-center pt-4">
                VITE
            </h2>
            <div className="flex flex-col text-center gap-1 p-4"><span className="text-2xl">Colecciones</span>
            <span>Conozca nuestras colecciones de materiales.</span></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 h-[50%]">
                <div className="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/img/Productos.png')" }}>
                    <span className="text-xl">Productos Premium</span>
                    <Image
                        src="/img/flechaSVG.svg"
                        alt="Logo"
                        width={25}
                        height={25}
                        className="absolute bottom-4 left-4 cursor-pointer"
                    />
                </div>
                <div className="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/img/inspiracion.png')" }}>
                    <span className="text-xl">Inspiracion & Galeria</span>
                    <Image
                        src="/img/flechaSVG.svg"
                        alt="Logo"
                        width={25}
                        height={25}
                        className="absolute bottom-4 left-4 cursor-pointer"
                    />
                </div>
                <div className="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/img/TuProyecto.png')" }}>
                    <span className="text-xl">Tus Proyectos</span>
                    <Image
                        src="/img/flechaSVG.svg"
                        alt="Logo"
                        width={25}
                        height={25}
                        className="absolute bottom-4 left-4 cursor-pointer"
                    />
                </div>
            </div>
        </section>
    )
}