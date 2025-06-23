import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  url: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, title }) => {
  return (
    <div
      className="relative h-full bg-cover bg-center bg-no-repeat flex items-center justify-center cursor-pointer group"
      style={{ backgroundImage: `url('${url}')` }}
    >
      {/* Filtro de brillo con transición para hover */}
      <div className="absolute inset-0 backdrop-brightness-50 group-hover:backdrop-brightness-75 transition-all duration-300"></div>

      {/* Texto con efecto pulse */}
      <span className="text-white relative z-10 animate-pulse-slow group-hover:animate-none tracking-wider text-[13px]">
        {title}
      </span>

      {/* Icono de flecha (fijo) */}
      <Image
        src="/img/flechaSVG.svg"
        alt="Arrow icon"
        width={25}
        height={25}
        className="absolute bottom-4 left-4 cursor-pointer z-10"
      />
    </div>
  );
};

export default ImageCard;