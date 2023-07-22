import React, { memo } from 'react'
import style from "./PortfolioCard.module.css"
import { PortfolioBrokerageIcons, PortfolioLogo, PortfolioStatsPreview, PortfolioTotalValue } from './components'
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

  // TODO: Rid off
  const HARDCODED_BROKERAGE_ICONS = [
    "https://exante.eu/static/i/dest/website/components/logos/flat_icon_1024x1024.png",
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
      {/* Absolute-positioned stuff bellow */}
      <PortfolioBrokerageIcons
        iconsList={HARDCODED_BROKERAGE_ICONS}
      />

      {/* TODO: Goal progress */}
    </article>
  )
}

export default memo(PortfolioCard)