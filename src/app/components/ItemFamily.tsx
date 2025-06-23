import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ItemFamilyProps {
    imageUrl: string | StaticImageData;  // Acepta rutas o imports estáticos
    title: string;
    className?: string;
}

const ItemFamily: React.FC<ItemFamilyProps> = ({
    imageUrl,
    title,
    className = '',
}) => {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <Image
                src={imageUrl}
                alt={title}
                width={100}
                height={100}
                className="rounded-md mb-4 shadow-[2px_2px_5px_rgba(0,0,0,0.20)] object-cover cursor-pointer hover:scale-105 transition-transform duration-400"
            />
            <span className="text-center font-medium">{title}</span>
        </div>
    );
};

export default ItemFamily;