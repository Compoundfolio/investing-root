import { Dividend, Dividends, normalizeArrayOfObjectsBy, oldDatesFirst } from "@core"
import { NormalizedValueChartDataSet } from "../types"

const calcDiv = (dividendList: Dividend[]): number => {
  return dividendList.reduce((prevDivPrice, currentDiv) => prevDivPrice + currentDiv.price, 0)
}

const getDividendsGainsXY = (dividends: Dividends): NormalizedValueChartDataSet => {
  console.log(dividends);
  
  const divsXY = Object
    .entries(dividends)
    .map(([date, dividendList]) => ({
      x: date,
      y: calcDiv(dividendList),
    }))
    .sort(oldDatesFirst)

  const normalizedDepositsAndWithdrawalsPricesByDate = normalizeArrayOfObjectsBy(
    divsXY, 
    "x",
  ) as NormalizedValueChartDataSet

  return normalizedDepositsAndWithdrawalsPricesByDate
}

export default getDividendsGainsXY