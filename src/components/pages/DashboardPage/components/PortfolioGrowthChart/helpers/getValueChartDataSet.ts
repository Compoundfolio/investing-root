import { NonTradeTransaction, normalizeArrayOfObjectsBy } from '@core';
import { NormalizedValueChartDataSet, ValueChartDataSet, ValueChartDataSetEntity } from "../types"
import { format, differenceInDays } from "date-fns"
import getDepositsAndWithdrawals from './getDepositsAndWithdrawals';
import { addPrevDatePrice, getValueChartDataEntity } from './xyMapers';
import getDividendsGainsXY from './getDividendsGainsXY';

const getValueChartDataSet = (
  allNonTradeTransactions: NonTradeTransaction[],
): ValueChartDataSet => {
  const depositsAndWithdrawals_xy = getDepositsAndWithdrawals(allNonTradeTransactions)
  // const dividendsGains_xy = getDividendsGainsXY()

  // Day +-change = All positions day change + commissions + taxes + day gain from sells
  // {
  //   x: date
  //   y: allOpenPossitionsGain + commissions + taxes + sellsGain + allOpenCashPossitionsGain + dividendsGain + couponGain
  // }
  

  const normalizedDepositsAndWithdrawalsPricesByDate = normalizeArrayOfObjectsBy(
    depositsAndWithdrawals_xy, 
    "x",
  ) as NormalizedValueChartDataSet

  const dataSet: ValueChartDataSet = Object
    .entries(normalizedDepositsAndWithdrawalsPricesByDate)
    .map(getValueChartDataEntity)
    .map(addPrevDatePrice)
    

  const lastDataSetEntity = dataSet[dataSet.length-1]
  const x = format(new Date(), "yyyy-MM-dd")
  const noTransactionsMadeByToday = differenceInDays(new Date(x), new Date(lastDataSetEntity.x)) > 0
    
  noTransactionsMadeByToday && dataSet.push({
    x,
    y: lastDataSetEntity.y,
  } satisfies ValueChartDataSetEntity)
    
  return dataSet
}

export default getValueChartDataSet
