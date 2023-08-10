"use client"

import usePortfolioManagerContext from '../../../../../../context/PortfolioManagerContextData/hook'

const ListTitle = () => {
  const { portfolioList } = usePortfolioManagerContext()
  return `My Portfolios [ ${portfolioList.length} ]`
}

export default ListTitle