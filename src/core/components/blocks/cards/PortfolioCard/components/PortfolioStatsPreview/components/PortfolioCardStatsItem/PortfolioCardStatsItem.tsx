import React from 'react'
import { PortfolioCardStatistic } from '../../types'
import styles from "./PortfolioCardStatsItem.module.css"

interface IPortfolioCardStatsItem {
  title: PortfolioCardStatistic['title']
  value: PortfolioCardStatistic['value']
}

const PortfolioCardStatsItem = ({
  title,
  value,
}: IPortfolioCardStatsItem) => {
  return (
    <div className='flex items-center gap-1.5'>
      <span className={styles.portfolioCard__stats_item__title}>
        {title}:
      </span>
      <span className={styles.portfolioCard__stats_item__value}>
        ${value}
      </span>
    </div>
  )
}

export default PortfolioCardStatsItem