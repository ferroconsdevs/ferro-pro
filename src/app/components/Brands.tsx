import Image from 'next/image'

export default function Brands() {

  return (
    <section className="brands w-full">
        {/* <span className="divider">Marcas</span> */}
        <div className="brand-wrapper flex justify-between py-12 border-t border-b border-[#C5C5C5] mb-12 mx-12">

          <Image
            src="/img/Vite.png"
            alt="Logo"
            width={150}
            height={50}
            className="mt-4"
          />
          <Image
            src="/img/Portobello.png"
            alt="Logo"
            width={150}
            height={50}
            className="mt-4"
          />
          <Image
            src="/img/Elizabeth.png"
            alt="Logo"
            width={150}
            height={50}
            className="mt-4"
          />
          <Image
            src="/img/Tendenza.png"
            alt="Logo"
            width={150}
            height={50}
            className="mt-4"
          />
          <Image
            src="/img/PedraFlex.png"
            alt="Logo"
            width={150}
            height={50}
            className="mt-4"
          />
        </div>
      </section>
  )
}