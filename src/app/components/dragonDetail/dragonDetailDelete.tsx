import React from 'react'

interface DragonDetailDeleteProps {
  deleteDragon: (id: string) => void
}

const DragonDetailDelete = ({deleteDragon}:DragonDetailDeleteProps) => {
  return (
    <button onClick={() => deleteDragon('dragonId')}>delete</button>
  )
}

export default DragonDetailDelete