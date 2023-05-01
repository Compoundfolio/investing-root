import { Dividends, NonTradeTransaction } from '@core';
import { ValueChartDataSet } from "../types"
import getDepositsAndWithdrawals from './getDepositsAndWithdrawals';
import getDividendsGainsXY from './getDividendsGainsXY';
import mergeNormalizedXy from './mergeNormalizedXy';
import addCurrentDayXyAtTheEnd from './addCurrentDayXyAtTheEnd';

const getValueChartDataSet = (
  allNonTradeTransactions: NonTradeTransaction[],
  dividends: Dividends,
): ValueChartDataSet => {
  const depositsAndWithdrawals_xy = getDepositsAndWithdrawals(allNonTradeTransactions)
  const dividendsGains_xy = getDividendsGainsXY(dividends)

  // Day +-change = All positions day change + commissions + taxes + day gain from sells
  // {
  //   x: date
  //   y: allOpenPossitionsGain + commissions + taxes + sellsGain + allOpenCashPossitionsGain + dividendsGain + couponGain
  // }  

  const dataSet = mergeNormalizedXy(
    depositsAndWithdrawals_xy,
    dividendsGains_xy,
  )
    
  return addCurrentDayXyAtTheEnd(dataSet)
}

export default getValueChartDataSet
