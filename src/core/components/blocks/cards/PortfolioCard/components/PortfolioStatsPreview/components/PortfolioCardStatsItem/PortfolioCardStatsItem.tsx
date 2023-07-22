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
    <div className='flex items-center gap-1.5'>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  )
}

export default PortfolioCardStatsItem