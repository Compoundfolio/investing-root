"use client"

import { ActButton } from '@core'
import React from 'react'

interface IActButtonGroup {
  saveSelectedPortfolio: () => void
  deleteSelectedPortfolio: () => void
}

const ActButtonGroup = ({
  saveSelectedPortfolio,
  deleteSelectedPortfolio,
}: IActButtonGroup) => {
  return (
    <div className="flex gap-4">
      <ActButton
        onClick={saveSelectedPortfolio}
        color='primary'
      >
        Apply changes
      </ActButton>
      <ActButton
        onClick={deleteSelectedPortfolio}
        color='lowPrior'
      >
        Delete portfolio
      </ActButton>
    </div>
  )
}

export default ActButtonGroup