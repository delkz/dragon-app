'use client'

import { Dragon } from '@/utils/types/dragon'
import React from 'react'
import DragonDetailEdit from './dragonDetailEdit'
import DragonDetailDelete from './dragonDetailDelete'
import Link from 'next/link'

type DragonDetailProps = {
    dragon: Dragon | undefined,
}


const DragonDetail = ({dragon}:DragonDetailProps) => {
    if(!dragon){
        return(<div>Dragon not found</div>)
    }

    return(<div>
        <h1><Link href={"/dragon/"+dragon.id}>{dragon.name}</Link></h1>
        <p>Type: {dragon.type}</p>
        <p>Created At: {dragon.createdAt}</p>
        <div>
            <DragonDetailEdit editDragon={()=>{}}/>
            <DragonDetailDelete deleteDragon={()=>{}}/>
        </div>
    </div>)
    
}

export default DragonDetail