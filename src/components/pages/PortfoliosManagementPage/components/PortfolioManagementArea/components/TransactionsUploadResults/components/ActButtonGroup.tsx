"use client"

import { ActButton } from '@core'
import React from 'react'
import usePortfolioManagerContext from '../../../../../context/PortfolioManagerContextData/hook';

const ActButtonGroup = () => {

  const {
    savePortfolioChanges,
    deletePortfolio,
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
        onClick={deletePortfolio}
        color='lowPrior'
      >
        Delete portfolio
      </ActButton>
    </div>
  )
}

export default ActButtonGroup