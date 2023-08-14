import React, { memo } from "react"
import styles from "./PortfolioCardList.module.css"
import { List, ListTitle } from "./components"

const PortfolioCardList = () => {
  return (
    <div className="relative w-full">
      <span className={styles.portfolioCardList__portfoliosAmount}>
        <ListTitle />
      </span>
      <div className={styles.portfolioCardList__cardsArea}>
        <List />
      </div>
      <div className={styles.portfolioCardList__backgroundBlock} />
    </div>
  )
}

export default memo(PortfolioCardList)
