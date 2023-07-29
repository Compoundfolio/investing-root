import React from 'react'
import styles from "./PortfolioCardStatsItem.module.css"

interface IPortfolioCardStatsItem {
  title: string
  value: string | number
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
        {value}
      </span>
    </div>
  )
}

export default PortfolioCardStatsItem