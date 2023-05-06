import { Dividends, NonTradeTransaction } from '@core';
import { NormalizedValueChartDataSet, ValueChartDataSet } from "../types"
import getDepositsAndWithdrawals from './getDepositsAndWithdrawals';
import getDividendsGainsXY from './getDividendsGainsXY';
import mergeNormalizedXy from './mergeNormalizedXy';
import { fillValueChartWithEmptyDays } from './xyMapers';
import getCommissions from './getCommissions';

const getValueChartDataSet = (
  allNonTradeTransactions: NonTradeTransaction[],
  dividends: Dividends,
): ValueChartDataSet => {
  const depositsAndWithdrawals_xy = getDepositsAndWithdrawals(allNonTradeTransactions)
  const dividendsGainsAfterTax_xy = getDividendsGainsXY(dividends)
  const commissions_xy = getCommissions(allNonTradeTransactions)
  
  const firstDepositDate = Object.keys(depositsAndWithdrawals_xy)[0]
  const emptyDays_xy = fillValueChartWithEmptyDays(new Date(firstDepositDate)) as unknown as NormalizedValueChartDataSet
  
  // Day +-change = All positions day change + commissions + taxes + day gain from sells
  // {
  //   x: date
  //   y: allOpenPossitionsGain + (Work)commissions + (Done)div_taxes + sellsGain + allOpenCashPossitionsGain + (Done)dividendsGain + (Done)fill empty spaces
  // }  

  const dataSet = mergeNormalizedXy(
    depositsAndWithdrawals_xy,
    dividendsGainsAfterTax_xy,
    commissions_xy,
    emptyDays_xy,
  )
    
  return dataSet
}

export default getValueChartDataSet
