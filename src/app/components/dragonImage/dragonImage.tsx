'use client'

import { Dragon } from '@/utils/types/dragon';
import Image from 'next/image';
import React, { useState } from 'react'

type DragonImageProps = {
    dragon: Dragon,
    className?: string
}

const DragonImage = ({dragon,className} : DragonImageProps) => {
    const [imgSrc, setImgSrc] = useState(`/dragonImages/${dragon.id}.png`);

    return (
        <Image className={className} loading='lazy' alt={dragon.name} width={250} height={250} src={imgSrc} onError={() => {
            setImgSrc("/dragonImages/0.png");
        }}></Image>
    )
}

export default DragonImage