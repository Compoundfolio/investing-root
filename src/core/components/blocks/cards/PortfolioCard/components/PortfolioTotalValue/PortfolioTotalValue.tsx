import React from 'react'
import styles from './PortfolioTotalValue.module.css'

interface IPortfolioTotalValue {
  totalValueNumber: number
}

const PortfolioTotalValue = ({ totalValueNumber }: IPortfolioTotalValue) => {
  return (
    <span className={styles.portfolioCard__totalValue}>
      ${totalValueNumber}
    </span>
  )
}

export default PortfolioTotalValue