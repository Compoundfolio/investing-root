import React from "react"
import { PlateAddButton } from "../PortfoliosMenu"
import { useCreateUserPortfolio } from "src/services"

const AddPortfolioPlateButton = () => {
  const {} = useCreateUserPortfolio()
  return <PlateAddButton title="Create Portfolio" />
}

export default AddPortfolioPlateButton
