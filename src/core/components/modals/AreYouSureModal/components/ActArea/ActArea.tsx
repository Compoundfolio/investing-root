"use client"

import React from "react"
import { ActButton } from "src/core/components/buttons"
import { useOpen } from "src/core/hooks"
import { portfolioDeleteAgreement } from "./consts"
import usePortfolioManagerContext from "../../../../../../components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData/hook"
import { Checkbox } from "src/core/client"

interface IActArea {
  closeModal: () => void
}

const ActArea = ({ closeModal }: IActArea) => {
  const [isUserSure, handleIsUserSure] = useOpen()

  const { deleteSelectedPortfolio } = usePortfolioManagerContext()

  const agreeToDeletePortfolio = () => {
    deleteSelectedPortfolio()
    closeModal()
  }

  return (
    <>
      <Checkbox
        name="portfolioDeleteAgreement"
        checked={isUserSure}
        description={portfolioDeleteAgreement}
        withMb={false}
        onChange={handleIsUserSure}
      />
      <div className="flex gap-4">
        <ActButton
          onClick={agreeToDeletePortfolio}
          color="primary"
          width="200px"
          disabled={!isUserSure}
        >
          Delete portfolio
        </ActButton>
        <ActButton onClick={closeModal} color="lowPrior" width="200px">
          Cancel
        </ActButton>
      </div>
    </>
  )
}

export default ActArea
