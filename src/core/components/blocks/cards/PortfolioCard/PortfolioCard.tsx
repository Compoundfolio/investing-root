"use client"

import React, { memo } from 'react'
import style from "./PortfolioCard.module.css"
import clsx from 'clsx';
import { IReactChildren } from 'src/core/types';

interface IPortfolioCard extends IReactChildren {
  id?: string
  isSelected: boolean
  setSelectedPortfolioCardId?: (id: string) => void
}

const PortfolioCard = ({
  id,
  isSelected,
  children,
  setSelectedPortfolioCardId,
}: IPortfolioCard) => {

  const isSelectableViaInteraction = !!setSelectedPortfolioCardId && !!id

  return (
    <article className='relative flex flex-col shadow'>
      <button
        className={clsx(style.portfolioCard, isSelected && style.portfolioCard_active)}
        onClick={() => isSelectableViaInteraction && setSelectedPortfolioCardId(id)}
      >
        {children}
      </button>
      {isSelected && isSelectableViaInteraction && (
        <div className={style.selectedLabel}>
          <span className={style.selectedLabel__text}>
            Selected
          </span>
        </div>
      )}
    </article>
  )
}

export default memo(PortfolioCard)