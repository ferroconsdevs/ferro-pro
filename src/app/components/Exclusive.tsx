import Image from 'next/image'
import ItemFamily from './ItemFamily';
// import ItemFamily from '';

export default function Exclusive() {

  return (
    <div>
    <section className="">
        <video src={require("../../../public/video/exclusivo.mp4")} autoPlay muted loop />
      </section>
      <section className="family flex font-semibold px-12 py-24 justify-between items-center">
        <div className="w-[11%]">
          <h3 className="">Descubre nuestros productos premium por categoría</h3>
          <Image
            src="/img/FlechaDerechaNegroSVG.svg"
            alt=""
            width={25}
            height={25}
            className="rounded-md pt-4 ml-2"
          />
        </div>
        <div className="family-wrapper flex gap-24 text-center">
          <ItemFamily imageUrl="/img/Marmol.png" title="Mármol" />
          <ItemFamily imageUrl="/img/Madera.png" title="Madera" />
          <ItemFamily imageUrl="/img/Cementicio.png" title="Cementicio" />
          <ItemFamily imageUrl="/img/Piedra.png" title="Piedra" />
          <ItemFamily imageUrl="/img/Oxido.png" title="Óxido" />
        </div>
      </section></div>
  )
}