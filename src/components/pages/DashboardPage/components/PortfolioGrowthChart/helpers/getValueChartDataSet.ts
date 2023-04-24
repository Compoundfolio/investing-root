import { NonTradeTransaction, normalizeArrayOfObjectsBy } from '@core';
import { NormalizedValueChartDataSet, ValueChartDataSet, ValueChartDataSetEntity } from "../types"
import { format } from "date-fns"

const getDepositsAndWithdrawals = (allNonTradeTransactions: NonTradeTransaction[]) => {
  return allNonTradeTransactions
    .filter(transaction => 
      transaction.type === "DEPOSIT" || 
      transaction.type === "WITHDRAWAL"
    )
    .map<ValueChartDataSetEntity>(({ time, price, type }) => ({ 
      x: format(new Date(time), "yyy-mm-dd"), 
      y: type === "WITHDRAWAL" ? -price : price
    }))
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
      y: yPrices.reduce((prev, cur) => prev + cur.y, 0)
    }))

  return dataSet

}

export default getValueChartDataSet
