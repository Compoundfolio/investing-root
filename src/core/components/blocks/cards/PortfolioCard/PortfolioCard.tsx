import React, { memo } from 'react'
import style from "./PortfolioCard.module.css"
import { PortfolioLogo, PortfolioStatsPreview, PortfolioTotalValue } from './components'
import { PortfolioCardStatistic } from './components/PortfolioStatsPreview/types';

interface IPortfolioCard {
  title: string
}

const PortfolioCard = ({
  title,
}: IPortfolioCard) => {

  // TODO: Rid off
  const HARDCODED_STATS: PortfolioCardStatistic[] = [
    { title: "Total Return", value: 264 },
    { title: "Annual Income", value: 60001 },
  ]

  return (
    <article className={style.portfolioCard}>
      <PortfolioLogo
        doesPortfolioSetupFinished={true}
      />
      <h2 className={style.portfolioCard__title}>
        {title}
      </h2>
      <PortfolioTotalValue
        totalValueNumber={96592}
      />
      <PortfolioStatsPreview
        stats={HARDCODED_STATS}
      />
      {/* TODO: Brokerages list */}
      {/* TODO: Goal progress */}
    </article>
  )
}

export default memo(PortfolioCard)