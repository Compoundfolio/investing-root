import React from 'react'
import { PortfolioCardStatistic } from '../../types'

interface IPortfolioCardStatsItem {
  title: PortfolioCardStatistic['title']
  value: PortfolioCardStatistic['value']
}

const PortfolioCardStatsItem = ({
  title,
  value,
}: IPortfolioCardStatsItem) => {
  return (
    <div>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  )
}

export default PortfolioCardStatsItem