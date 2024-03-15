import React, { useMemo } from "react"
import { PlateAddButton } from "../PortfoliosMenu"
import { extraAddButtonContent } from "./const"
import { useCreatePortfolio } from "./hooks"

const AddPortfolioPlateButton = () => {
  const { isNoPortfolios, createPortfolio } = useCreatePortfolio()

  const extraContent = useMemo(
    () => (isNoPortfolios ? extraAddButtonContent : null),
    [isNoPortfolios, extraAddButtonContent]
  )

  return (
    <PlateAddButton
      title="Create Portfolio"
      extraContent={extraContent}
      onClick={createPortfolio}
    />
  )
}

export default AddPortfolioPlateButton
