"use client"

import React, { memo } from 'react'
import style from "./PortfolioCard.module.css"
import { PortfolioBrokerageIcons, PortfolioLogo, PortfolioStatsPreview, PortfolioTotalValue } from './components'
import { PortfolioCardStatistic } from './components/PortfolioStatsPreview/types';
import clsx from 'clsx';

interface IPortfolioCard {
  id: string
  title: string,
  isSelected: boolean
  setSelectedPortfolioCardId: (id: string) => void
}

const PortfolioCard = ({
  id,
  title,
  isSelected,
  setSelectedPortfolioCardId,
}: IPortfolioCard) => {

  // TODO: Ride of
  const HARDCODED_STATS: PortfolioCardStatistic[] = [
    { title: "Total Return", value: 264 },
    { title: "Annual Income", value: 60001 },
  ]

  // TODO: Ride of
  const HARDCODED_BROKERAGE_ICONS = [
    "https://exante.eu/static/i/dest/website/components/logos/flat_icon_1024x1024.png",
  ]

  return (
    <article className='relative flex flex-col'>
      <button
        className={clsx(style.portfolioCard, isSelected && style.portfolioCard_active)}
        onClick={() => setSelectedPortfolioCardId(id)}
      >
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
      </button>
      {isSelected && (
        <div className={style.selectedLabel}>
          <span className={style.selectedLabel__text}>
            Selected
          </span>
        </div>
      )}
    </article>
  )
}

export default memo(PortfolioCard)