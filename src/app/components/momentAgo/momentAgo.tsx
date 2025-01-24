'use client'

import getRelativeTime from '@/utils/getRelativeDate'
import { Dragon } from '@/utils/types/dragon'
import React from 'react'
import style from './style.module.scss'

interface MomentAgoProps {
  data: Dragon,
}

const MomentAgo = ({ data }:MomentAgoProps) => {
  const createdAt = data.createdAt;
  const nowTime = new Date();

  if (!createdAt) {
    return null;
  }

  return (
    <p
      data-ref={createdAt}
      title={`Criado em ${new Intl.DateTimeFormat("pt-BR").format(new Date(createdAt))}`}
      data-testid="dragonCreationDate"
      id="dragonCreationDate"
      className={style.moment}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      {getRelativeTime(createdAt,nowTime)}
    </p>
  );
}

export default MomentAgo;