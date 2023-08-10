"use client"

import { memo } from "react"
import usePortfolioManagerContext from '../../../../../../context/PortfolioManagerContextData/hook';
import { PortfolioCard, PortfolioCardContent } from "@core";

// TODO: Manage to make this component server
const List = () => {

  const {
    portfolioList,
    selectedPortfolioCard,
    selectPortfolioById,
  } = usePortfolioManagerContext()

  return portfolioList.map(({ title, id, totalReturnValue, totalReturnPercentage, annualIncome }) => (
    <PortfolioCard
      key={id}
      id={id}
      isSelected={selectedPortfolioCard?.id === id}
      setSelectedPortfolioCardId={selectPortfolioById}
    >
      <PortfolioCardContent
        title={title}
        totalReturnValue={totalReturnValue}
        totalReturnPercentage={totalReturnPercentage}
        annualIncome={annualIncome}
      />
    </PortfolioCard>
  ))
}

export default memo(List)