"use client"

import React, { memo } from 'react'
import PlateAddButton from 'src/core/components/buttons/PlateAddButton'
import { useCreatePortfolio } from './hooks'
import { PortfolioCardList } from './components'

const PortfoliosMenu = () => {

  const {
    createNewPortfolioCard,
  } = useCreatePortfolio()

  return (
    <section className='flex items-center w-full gap-8'>
      <PlateAddButton
        title='Create Portfolio'
        onClick={createNewPortfolioCard}
      />
      <PortfolioCardList
        portfolioEntityList={[{ title: "My Dividend Growth FI" }, { title: "My Dividend Growth FI 2" }]}
      />
    </section>
  )
}

export default memo(PortfoliosMenu)