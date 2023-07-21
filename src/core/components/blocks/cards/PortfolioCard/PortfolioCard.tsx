import React, { memo } from 'react'
import style from "./PortfolioCard.module.css"
import { PortfolioLogo, PortfolioTotalValue } from './components'

interface IPortfolioCard {
  title: string
}

const PortfolioCard = ({
  title,
}: IPortfolioCard) => {
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
      {/* TODO: Stats */}
      {/* TODO: Brokerages list */}
      {/* TODO: Goal progress */}
    </article>
  )
}

export default memo(PortfolioCard)