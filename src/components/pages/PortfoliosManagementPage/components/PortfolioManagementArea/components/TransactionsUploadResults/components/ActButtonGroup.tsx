"use client"

import { ActButton, AreYouSureModal, PortfolioCard, PortfolioCardContent, useOpen } from '@core'
import React from 'react'
import usePortfolioManagerContext from '../../../../../context/PortfolioManagerContextData/hook';

const ActButtonGroup = () => {

  const [ isAgreeModalOpen, handleIsAgreeModalOpen ] = useOpen()

  const {
    selectedPortfolioCard,
    savePortfolioChanges,
  } = usePortfolioManagerContext()

  return (
    <div className="flex gap-4">
      <ActButton
        onClick={savePortfolioChanges}
        color='primary'
      >
        Apply changes
      </ActButton>
      <ActButton
        onClick={handleIsAgreeModalOpen}
        color='lowPrior'
      >
        Delete portfolio
      </ActButton>
      <AreYouSureModal
        isOpen={isAgreeModalOpen}
        title="Permanently delete this portfolio?"
        handleModalOpenStatus={handleIsAgreeModalOpen}
      >
        <PortfolioCard isSelected={true}>
          <PortfolioCardContent
            title={selectedPortfolioCard?.title!}
            totalReturnValue={selectedPortfolioCard?.totalReturnValue!}
            totalReturnPercentage={selectedPortfolioCard?.totalReturnPercentage!}
            annualIncome={selectedPortfolioCard?.annualIncome!}
          />
        </PortfolioCard>
      </AreYouSureModal>
    </div>
  )
}

export default ActButtonGroup