type PortfolioAssetDividendData = {
  dividendYieldRate: number
  dividendYieldOnCostRate: number
  // TODO: Research questionable fields bellow
  averageDividendGrowthRate: number
  upcomingDividendDate: string
  upcomingDividendAmount: number
}

export default PortfolioAssetDividendData
