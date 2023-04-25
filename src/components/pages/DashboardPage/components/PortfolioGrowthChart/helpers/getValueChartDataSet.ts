import { NonTradeTransaction, normalizeArrayOfObjectsBy, oldDatesFirst } from '@core';
import { NormalizedValueChartDataSet, ValueChartDataSet, ValueChartDataSetEntity } from "../types"
import { format } from "date-fns"



const getDepositsAndWithdrawals = (allNonTradeTransactions: NonTradeTransaction[]) => {
  return allNonTradeTransactions
    .filter(transaction => 
      transaction.type === "DEPOSIT" || 
      transaction.type === "WITHDRAWAL"
    )
    .map<ValueChartDataSetEntity>(({ time, price, type }) => ({ 
      x: format(new Date(time), "yyyy-MM-dd"), 
      y: type === "WITHDRAWAL" ? -price : price
    }))
    .sort(oldDatesFirst)
}
const getValueChartDataSet = (
  allNonTradeTransactions: NonTradeTransaction[],
): ValueChartDataSet => {

  const normalizedDepositsAndWithdrawalsPricesByDate = normalizeArrayOfObjectsBy(
    getDepositsAndWithdrawals(allNonTradeTransactions),
    "x",
  ) as NormalizedValueChartDataSet
  
  const dataSet = Object
    .entries(normalizedDepositsAndWithdrawalsPricesByDate)
    .map(([ xDate, yPrices ]) => ({
      x: xDate,
      y: yPrices.reduce((prev, cur) => prev + cur.y, 0) // Get total d&w by specific date 
    }))
    .map(({ x, y }, index, mappedArray) => ({
      x,
      y: y + (mappedArray[index-1]?.y ?? 0) // Get total d&w by specific date + prev date 
    }))

    console.log(Object
      .entries(normalizedDepositsAndWithdrawalsPricesByDate)
      .map(([ xDate, yPrices ]) => ({
        x: xDate,
        y: yPrices.reduce((prev, cur) => prev + cur.y, 0) // Get total d&w by specific date 
      })));
    

  return dataSet

}

export default getValueChartDataSet
