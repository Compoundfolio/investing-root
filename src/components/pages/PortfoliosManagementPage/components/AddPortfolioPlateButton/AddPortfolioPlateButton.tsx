import React from "react"
import { PlateAddButton } from "../PortfoliosMenu"
import { useCreateUserPortfolio } from "src/services"
import { usePortfolioManagerContext } from "../../context/PortfolioManagerContextData"

// TODO: Remove
const AddPortfolioPlateButton = () => {
  const { createNewPortfolioCard } = usePortfolioManagerContext()
  const { mutate } = useCreateUserPortfolio(createNewPortfolioCard)

  return (
    <PlateAddButton
      title="Create Portfolio"
      onClick={() => mutate({ label: "New Portfolio" })}
    />
  )
}

export default AddPortfolioPlateButton
