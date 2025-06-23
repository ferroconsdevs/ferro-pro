'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const ContactSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Datos de ejemplo para el carrusel - puedes reemplazar con tus datos reales
  const experts = [
    {
      id: 1,
      name: "Jorge Patiño",
      role: "Especialista en Ventas",
      image: "/img/profiles/Jorge-Patiño.jpg",
      alt: "Jorge Patiño - Especialista en Ventas"
    },
    {
      id: 2,
      name: "Manuel Carreras",
      role: "Especialista en Ventas",
      image: "/img/profiles/Manuel-Carreras.jpg",
      alt: "Manuel Carreras - Especialista en Ventas"
    },
    {
      id: 3,
      name: "Daniela Nimis",
      role: "Especialista en Ventas",
      image: "/img/profiles/Daniela-Nimis.jpg",
      alt: "Daniela Nimis - Especialista en Ventas"
    },
    {
      id: 4,
      name: "Mariela Checa",
      role: "Responsable de Ventas",
      image: "/img/profiles/Mariela-Checa.jpg",
      alt: "Mariela Checa - Responsable de Ventas"
    },
    {
      id: 5,
      name: "Alberto Oliva",
      role: "Vendedor SemiSenior",
      image: "/img/profiles/Alberto-Oliva.jpg",
      alt: "Alberto Oliva - Vendedor SemiSenior"
    }
  ]

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, experts.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Reanudar auto-play después de 10s
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + experts.length) % experts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % experts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="contact pt-16">
      {/* Título */}
      <div className="px-4 md:px-12 mb-12">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#C5C5C5] leading-tight">
          contáctate con nuestros expertos
        </h2>
      </div>

      {/* Carrusel con fondo */}
      <div 
        className="bg-cover bg-center bg-no-repeat min-h-[500px] md:h-[600px] flex flex-col items-center justify-center p-6 md:p-12 mt-12 relative"
        style={{ 
          backgroundImage: "url('/img/ContactoFondo.png')",
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Contenedor del carrusel */}
        <div className="relative w-full max-w-4xl z-10">
          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            
            {/* Carrusel con 3 tarjetas visibles */}
            <div className="flex items-center justify-center w-full h-full relative">
              {experts.map((expert, index) => {
                // Calcular la posición relativa de cada tarjeta
                const getCardPosition = (expertIndex: number) => {
                  const diff = expertIndex - currentSlide
                  if (diff === 0) return 'center' // Tarjeta principal
                  if (diff === 1 || (diff === -(experts.length - 1))) return 'right' // Tarjeta derecha
                  if (diff === -1 || (diff === experts.length - 1)) return 'left' // Tarjeta izquierda
                  return 'hidden' // Tarjetas ocultas
                }

                const position = getCardPosition(index)
                
                // Clases según la posición
                const getCardClasses = (pos: string) => {
                  const baseClasses = "absolute transition-all duration-500 ease-in-out"
                  
                  switch (pos) {
                    case 'center':
                      return `${baseClasses} transform translate-x-0 scale-100 z-30 opacity-100`
                    case 'left':
                      return `${baseClasses} transform -translate-x-64 md:-translate-x-80 scale-75 z-20 opacity-60`
                    case 'right':
                      return `${baseClasses} transform translate-x-64 md:translate-x-80 scale-75 z-20 opacity-60`
                    default:
                      return `${baseClasses} transform scale-50 opacity-0 z-10`
                  }
                }

                return (
                  <div
                    key={expert.id}
                    className={getCardClasses(position)}
                    onClick={() => position !== 'center' && goToSlide(index)}
                    style={{ cursor: position !== 'center' ? 'pointer' : 'default' }}
                  >
                    <div className="w-66 md:w-80 h-66 md:h-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center text-center">
                      {/* Imagen del experto */}
                      <div className="mb-4">
                        <Image
                          src={expert.image}
                          alt={expert.alt}
                          width={position === 'center' ? 150 : 120}
                          height={position === 'center' ? 150 : 120}
                          className="rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300"
                          onError={(e) => {
                            // Fallback en caso de error de imagen
                            (e.target as HTMLImageElement).src = '/img/img-profile.jpg'
                          }}
                        />
                      </div>
                      
                      {/* Información del experto */}
                      <h3 className={`font-bold text-gray-900 mb-2 transition-all duration-300 ${
                        position === 'center' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                      }`}>
                        {expert.name}
                      </h3>
                      <p className={`text-gray-600 mb-4 transition-all duration-300 ${
                        position === 'center' ? 'text-base md:text-lg' : 'text-sm md:text-base'
                      }`}>
                        {expert.role}
                      </p>
                      
                      {/* Botón de contacto - solo visible en tarjeta principal */}
                      {position === 'center' && (
                        <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                          Contactar Ahora
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Botón anterior */}
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white/90 transition-colors duration-200 shadow-lg group focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Anterior"
            >
              <svg 
                className="w-5 h-5 text-gray-800" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Botón siguiente */}
            <button
              type="button"
              onClick={goToNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white/90 transition-colors duration-200 shadow-lg group focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Siguiente"
            >
              <svg 
                className="w-5 h-5 text-gray-800" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {experts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection