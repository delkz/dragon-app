'use client'

import { Dragon } from '@/utils/types/dragon'
import React from 'react'
import DragonDetailDelete from '../deleteButton/deleteButton'
import Link from 'next/link'
import style from './style.module.scss';
import DragonImage from '../dragonImage/dragonImage'
import { motion } from "motion/react"
import MomentAgo from '../momentAgo/momentAgo'

type SpotDetailProps = {
    dragon: Dragon | undefined,
}


const SpotDetail = ({ dragon }: SpotDetailProps) => {
    if (!dragon || !dragon.id) {
        return (<div>Dragon not found</div>)
    }

    return (<motion.div
        initial={{ scale: 0 }} animate={{ scale: 1 }}
    className={`${style.dragonCard}`}>

        <Link title={dragon.name} href={"/dragon/" + dragon.id} className={`${style.dragonCardImage} `}>
           <DragonImage dragon={dragon}/>
        </Link>

        <MomentAgo data={dragon}/>

        <div className={style.dragonCardInfosContainer}>
            <div className={style.dragonCardInfosContainerTypeButtons}>
                <h2 id="dragonName" data-testid="dragonName" className={`${style.dragonCardTitle}`}>
                    <Link title={dragon.name} href={"/dragon/" + dragon.id}>{dragon.name}</Link>
                </h2>
                <div className={`${style.dragonCardButtons}`}>
                    <Link title={dragon.name} data-testid="dragonEditButton" href={"/dragon/edit/" + dragon.id}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </Link>
                    <DragonDetailDelete dragonId={dragon.id} />
                </div>
            </div>
            <span data-testid="dragonType" id="dragonType" className={`${style.dragonCardType} type-${dragon.type.toLowerCase().trim()}`}>
                {dragon.type}
            </span>
        </div>
    </motion.div>)

}

export default SpotDetail