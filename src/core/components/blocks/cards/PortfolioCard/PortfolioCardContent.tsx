import React, { memo } from "react"
import {
  PortfolioLogo,
  PortfolioStatsPreview,
  PortfolioTotalValue,
} from "./components"
import style from "./PortfolioCard.module.css"

interface IPortfolioCardContent {
  title: string
  totalReturnValue: number | null
  totalReturnPercentage: number | null
  annualIncome: number | null
}

const PortfolioCardContent = ({
  title,
  totalReturnValue = null,
  totalReturnPercentage = null,
  annualIncome = null,
}: IPortfolioCardContent) => (
  <>
    <PortfolioLogo doesPortfolioSetupFinished={true} />
    <h2 className={style.portfolioCard__title}>{title}</h2>
    {totalReturnValue !== null && (
      <PortfolioTotalValue totalValueNumber={totalReturnValue} />
    )}
    {annualIncome !== null && totalReturnPercentage !== null && (
      <PortfolioStatsPreview
        totalReturnPercentage={totalReturnPercentage}
        annualIncome={annualIncome}
      />
    )}
    {/* Absolute-positioned stuff bellow */}
    {/* <PortfolioBrokerageIcons
    iconsList={HARDCODED_BROKERAGE_ICONS}
  /> */}
    {/* TODO: Add Goal progress */}
  </>
)

export default memo(PortfolioCardContent)
