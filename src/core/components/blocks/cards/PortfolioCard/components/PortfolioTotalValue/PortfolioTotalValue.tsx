import React from 'react'

interface IPortfolioTotalValue {
  totalValueNumber: number
}

const PortfolioTotalValue = ({ totalValueNumber }: IPortfolioTotalValue) => {
  return (
    <span>{totalValueNumber}</span>
  )
}

export default PortfolioTotalValue