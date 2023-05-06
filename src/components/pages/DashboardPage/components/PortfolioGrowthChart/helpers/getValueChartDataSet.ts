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
  const dividendsGainsAfterTax_xy = getDividendsGainsXY(dividends)

  // Day +-change = All positions day change + commissions + taxes + day gain from sells
  // {
  //   x: date
  //   y: allOpenPossitionsGain + (TODO)commissions + (Done)div_taxes + sellsGain + allOpenCashPossitionsGain + (Done)dividendsGain
  // }  

  const dataSet = mergeNormalizedXy(
    depositsAndWithdrawals_xy,
    dividendsGainsAfterTax_xy,
  )
    
  return addCurrentDayXyAtTheEnd(dataSet)
}

export default getValueChartDataSet
