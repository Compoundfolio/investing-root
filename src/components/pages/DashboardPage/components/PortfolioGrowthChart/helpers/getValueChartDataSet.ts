import { BrokerageTransactionType, NonTradeTransaction, normalizeArrayOfObjectsBy } from '@core';
import { NormalizedValueChartDataSet, ValueChartDataSet, ValueChartDataSetEntity } from "../types"
import { format } from "date-fns"

const getDepositsAndWithdrawals = (allNonTradeTransactions: NonTradeTransaction[]) => {
  return allNonTradeTransactions
    .filter(transaction => 
      transaction.type === BrokerageTransactionType.DEPOSIT || 
      transaction.type === BrokerageTransactionType.WITHDRAWAL
    )
    .map<ValueChartDataSetEntity>(({ time, orderPrice, type }) => ({ 
      x: format(new Date(time), "yyy-mm-dd"), 
      y: type === BrokerageTransactionType.WITHDRAWAL ? -orderPrice : orderPrice
    }))
}

const getValueChartDataSet = (
  allNonTradeTransactions: NonTradeTransaction[],
): ValueChartDataSet => {
  const normalizedDepositsAndWithdrawalsPricesByDate = normalizeArrayOfObjectsBy(
    getDepositsAndWithdrawals(allNonTradeTransactions),
    "x",
  ) as NormalizedValueChartDataSet
    console.log(allNonTradeTransactions
      .filter(transaction => 
        transaction.type === BrokerageTransactionType.DEPOSIT || 
        transaction.type === BrokerageTransactionType.WITHDRAWAL
      ));
    
  const dataSet = Object
    .entries(normalizedDepositsAndWithdrawalsPricesByDate)
    .map(([ xDate, yPrices ]) => ({
      x: xDate,
      y: yPrices.reduce((prev, cur) => prev + cur.y, 0)
    }))

  return dataSet

}

export default getValueChartDataSet
