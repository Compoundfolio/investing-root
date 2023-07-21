import React, { memo } from 'react'
import style from "./PortfolioCard.module.css"

interface IPortfolioCard {
  title: string
}

const PortfolioCard = ({
  title,
}: IPortfolioCard) => {
  return (
    <article className={style.portfolioCard}>
      {/* TODO: Icon */}
      <h2 className={style.portfolioCard__title}>{title}</h2>
      {/* TODO: Stats */}

      {/* TODO: Brokerages list */}
      {/* TODO: Goal progress */}
    </article>
  )
}

export default memo(PortfolioCard)