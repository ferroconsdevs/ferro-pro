import ImageCard from './ImageCard';
import Header from './Header';
export default function Hero() {

  return (

    <section className="hero relative z-0 h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 h-64">
        <ImageCard
          url="/img/ProductosPremium.jpg"
          title="Productos Premium"
        />
        <ImageCard
          url="/img/InspiracionGaleria.jpg"
          title="Inspiración & Galería"
        />
        <ImageCard
          url="/img/TuProyecto.jpg"
          title="Tus Proyectos"
        />
      </div>
      <div className='flex-1 bg-[#C5C5C5] flex w-full items-center justify-between px-12'>
        <div className='h-1/2 bg-white rounded-lg w-1/4'>
          <span>Div 1</span>
        </div>
        <div className='h-1/2 bg-white rounded-lg w-1/4'>
          <span>Div 2</span>
        </div>
        <div className='h-1/2 bg-white rounded-lg w-1/4'>
          <span>Div 3</span>
        </div>
      </div>

    </section>
  )
}