'use client'

import { Dragon } from '@/utils/types/dragon';
import Image from 'next/image';
import React, { useState } from 'react'

type DragonImageProps = {
    dragon: Dragon,
    className?: string
}

const DragonImage = ({ dragon, className }: DragonImageProps) => {
    const getImageId = (id: string|number|undefined) => {
        if (!id) {
            return 1;
        }
        return ((Number(id) - 1) % 20) + 1;
    }
    
    const [imgSrc, setImgSrc] = useState(`/dragonImages/${getImageId(dragon.id)}.png`);

    const getFallbackImage = () => {
        // Essa função garante que a imagem do dragão esteja sempre entre 1 e 20
        const id = Number(dragon.id);
        const fallBackId = getImageId(id);
        setImgSrc(`/dragonImages/${fallBackId}.jpg`);
    };

    return (
        <Image className={className} loading='lazy' alt={dragon.name} width={250} height={250} src={imgSrc} onError={() => {
            getFallbackImage();
        }}></Image>
)

}

export default DragonImage