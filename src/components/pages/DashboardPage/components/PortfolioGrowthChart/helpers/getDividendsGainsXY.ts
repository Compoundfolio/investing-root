import { Dividend, Dividends, oldDatesFirst } from "@core"
import { ValueChartDataSetEntity } from "../types"

const calcDiv = (dividendList: Dividend[]): number => {
  return dividendList.reduce((prevNumber, currentDiv) => {
    return prevNumber + (currentDiv.price + currentDiv.divTax)
  }, 0)
}

const getDividendsGainsXY = (dividends: Dividends): ValueChartDataSetEntity[] => {
  return Object
    .entries(dividends)
    .map<ValueChartDataSetEntity>(([date, dividendList]) => ({
      x: date,
      y: calcDiv(dividendList),
    }))
    .sort(oldDatesFirst)
}

export default getDividendsGainsXY