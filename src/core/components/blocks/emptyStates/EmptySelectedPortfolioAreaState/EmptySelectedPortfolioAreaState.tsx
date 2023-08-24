import React from 'react'
import EmptyState from '../EmptyState'
import PortfolioCardSelectionIcon from './icon'

const EmptySelectedPortfolioAreaState = () => {
  return (
    <section className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
      <EmptyState
        icon={<PortfolioCardSelectionIcon />}
        title="Portfolio not selected"
        callToAction="Select one of the portfolio cards above"
      />
    </section>
  )
}

export default EmptySelectedPortfolioAreaState