'use client'
import React from 'react'

interface DragonDetailEditProps {
    editDragon: (id: string) => void
  }
  
  const DragonDetailEdit = ({editDragon}:DragonDetailEditProps) => {
    return (
      <button onClick={() => editDragon('dragonId')}>Edit</button>
    )
  }

export default DragonDetailEdit