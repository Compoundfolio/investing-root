import { Dividend, Dividends, normalizeArrayOfObjectsBy, oldDatesFirst } from "@core"
import { NormalizedValueChartDataSet, ValueChartDataSetEntity } from "../types"

const calcDiv = (dividendList: Dividend[]): number => {
  return dividendList.reduce((prevNumber, currentDiv) => {
    return prevNumber + (currentDiv.price + currentDiv.divTax)
  }, 0)
}

const getDividendsGainsXY = (dividends: Dividends): NormalizedValueChartDataSet => {
  const divsXY = Object
    .entries(dividends)
    .map<ValueChartDataSetEntity>(([date, dividendList]) => ({
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