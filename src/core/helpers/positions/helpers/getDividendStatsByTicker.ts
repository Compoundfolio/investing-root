import { DividendStats, Ticker } from "src/core/types"

const getDividendStatsByTicker = (
  ticker: Ticker,
  openSharesAmount: number
): DividendStats => {
  // TODO: Make API call
  return {
    divYield: 0.0,
    div1yGrowth: 0.0,
    div5yGrowth: 0.0,
    div10yGrowth: 0.0,
    divForOneShare: 0.01,
    divForAllShares: 0.01 * Math.abs(openSharesAmount),
  } as DividendStats
}

export default getDividendStatsByTicker
