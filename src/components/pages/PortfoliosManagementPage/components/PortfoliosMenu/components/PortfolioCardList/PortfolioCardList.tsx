import { Portfolio, PortfolioCard } from '@core'
import React, { memo } from 'react'
import styles from './PortfolioCardList.module.css'

export interface IPortfolioCardList {
  portfolioEntityList: Portfolio[],
  selectedPortfolioCardId: string | undefined
  setSelectedPortfolioCardId: (id: string) => void
}

const PortfolioCardList = ({
  portfolioEntityList,
  selectedPortfolioCardId,
  setSelectedPortfolioCardId,
}: IPortfolioCardList) => {
  return (
    <div className='relative w-full'>
      <span className={styles.portfolioCardList__portfoliosAmount}>
        My Portfolios [ {portfolioEntityList.length} ]
      </span>
      <div className={styles.portfolioCardList__cardsArea}>
        {portfolioEntityList.map(({ title, id }) => (
          <PortfolioCard
            key={id}
            id={id}
            title={title}
            isSelected={selectedPortfolioCardId === id}
            setSelectedPortfolioCardId={setSelectedPortfolioCardId}
          />
        ))}
      </div>
      <div className={styles.portfolioCardList__backgroundBlock} />
    </div>
  )
}

export default memo(PortfolioCardList)