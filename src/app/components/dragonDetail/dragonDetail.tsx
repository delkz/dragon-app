'use client'

import { Dragon } from '@/utils/types/dragon'
import React from 'react'
import DragonDetailDelete from './dragonDetailDelete'
import Link from 'next/link'
import style from './style.module.scss';

type DragonDetailProps = {
    dragon: Dragon | undefined,
}


const DragonDetail = ({ dragon }: DragonDetailProps) => {
    if (!dragon || !dragon.id) {
        return (<div>Dragon not found</div>)
    }

    return (<div className={`${style.dragonCard}`}>
        <h2 id="dragonName" data-testid="dragonName" className={`${style.dragonCardTitle}`}><Link href={"/dragon/" + dragon.id}>{dragon.name}</Link></h2>
        <p id="dragonType" className={`${style.dragonCardType} type-${dragon.type}`}>Type: {dragon.type}</p>
        <p id="dragonCreationDate" className={`${style.dragonCardCreation}`}>Created At: {dragon.createdAt}</p>
        <div className={`${style.dragonCardButtons}`}>
            <Link data-testid="dragonEditButton" href={"/dragon/edit/" + dragon.id}>Edit</Link>
            <DragonDetailDelete dragonId={dragon.id} />
        </div>
    </div>)

}

export default DragonDetail