import { Dividend, Dividends, normalizeArrayOfObjectsBy, oldDatesFirst } from '@core';
import { NormalizedValueChartDataSet } from "../types"
import { isNumber } from "lodash"

const calcDiv = (dividendList: Dividend[]): number => {  
  return dividendList?.reduce((prevDivPrice, currentDiv) => prevDivPrice + currentDiv.price, 0)
}

const getDividendsGainsXY = (dividends: Dividends): NormalizedValueChartDataSet => {  
  const divsXY = Object
    .entries(dividends)
    .map(([date, dividendList]) => ({
      x: date,
      y: isNumber(dividendList) ? dividendList : calcDiv(dividendList),
    }))
    .sort(oldDatesFirst)

  const normalizedDepositsAndWithdrawalsPricesByDate = normalizeArrayOfObjectsBy(
    divsXY, 
    "x",
  ) as NormalizedValueChartDataSet

  return normalizedDepositsAndWithdrawalsPricesByDate
}

export default getDividendsGainsXY