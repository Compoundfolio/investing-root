import { NonTradeTransaction, normalizeArrayOfObjectsBy } from '@core';
import { NormalizedValueChartDataSet, ValueChartDataSet, ValueChartDataSetEntity } from "../types"
import { format, differenceInDays } from "date-fns"
import getDepositsAndWithdrawals from './getDepositsAndWithdrawals';
import { addPrevDatePrice, getValueChartDataEntity } from './xyMapers';

const getValueChartDataSet = (
  allNonTradeTransactions: NonTradeTransaction[],
): ValueChartDataSet => {
  const depositsAndWithdrawals = getDepositsAndWithdrawals(allNonTradeTransactions)

  const normalizedDepositsAndWithdrawalsPricesByDate = normalizeArrayOfObjectsBy(
    depositsAndWithdrawals, 
    "x",
  ) as NormalizedValueChartDataSet

  const dataSet: ValueChartDataSet = Object
    .entries(normalizedDepositsAndWithdrawalsPricesByDate)
    .map(getValueChartDataEntity)
    .map(addPrevDatePrice)

  const lastDataSetEntity = dataSet[dataSet.length-1]
  const noTransactionsMadeByToday = differenceInDays(new Date(), new Date(lastDataSetEntity.x)) > 0
    
  noTransactionsMadeByToday && dataSet.push({
    x: format(new Date(), "yyyy-MM-dd"),
    y: lastDataSetEntity.y,
  } satisfies ValueChartDataSetEntity)
    
  return dataSet
}

export default getValueChartDataSet
