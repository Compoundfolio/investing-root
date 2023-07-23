import React from 'react'
import { PortfolioCardStatsItem } from './components'
import { PortfolioCardStatistic } from './types'

interface IPortfolioStatsPreview {
  stats: PortfolioCardStatistic[]
}

const PortfolioStatsPreview = ({
  stats,
}: IPortfolioStatsPreview) => {
  return (
    <section className='flex flex-col items-center gap-2'>
      {stats.map(({ title, value }) => (
        <PortfolioCardStatsItem
          key={title}
          title={title}
          value={value}
        />
      ))}
    </section>
  )
}

export default PortfolioStatsPreview