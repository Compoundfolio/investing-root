import { Portfolio, PortfolioCard } from '@core'
import React, { memo } from 'react'
import styles from './PortfolioCardList.module.css'

interface IPortfolioCardList {
  portfolioEntityList: Portfolio[]
}

const PortfolioCardList = ({
  portfolioEntityList,
}: IPortfolioCardList) => {
  return (
    <div className='relative w-full'>
      <span className={styles.portfolioCardList__portfoliosAmount}>
        My Portfolios [ {portfolioEntityList.length} ]
      </span>
      <div className={styles.portfolioCardList__cardsArea}>
        {portfolioEntityList.map(({ title }) => (
          <PortfolioCard
            title={title}
          />
        ))}
      </div>
      <div className={styles.portfolioCardList__backgroundBlock} />
    </div>
  )
}

export default memo(PortfolioCardList)