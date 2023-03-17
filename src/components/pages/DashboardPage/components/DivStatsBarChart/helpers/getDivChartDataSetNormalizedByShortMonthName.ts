import { NonTradeTransaction } from 'src/core/types';
import { getMonthShortNameFromDate, getYearByDate, normalizeArrayOfObjectsBy } from '@core';
import { DivChartDataSet } from '../types';
import { INITIAL_DIV_CHART_DATA } from '../const';

// TODO: Types
// TODO: Rename the function and variables
const getDivChartDataSetNormalizedByShortMonthName = (
  payedDividendTransactions: NonTradeTransaction<"DIVIDEND">[]
) => {
  const payedDividendTransactionsWithShortMonthNames = payedDividendTransactions.map(payedDividendTransaction => ({
    ...payedDividendTransaction,
    time: getMonthShortNameFromDate(payedDividendTransaction.time),
    year: getYearByDate(payedDividendTransaction.time)
  }))

  const normalizedDivDataByYear = normalizeArrayOfObjectsBy(
    payedDividendTransactionsWithShortMonthNames,
    "year"
  )

  let resultDataSet: DivChartDataSet = {}
  
  Object.entries(normalizedDivDataByYear).forEach(([year, dividendTransactionsWithShortMonthNamesForParticularYear]) => {    
    if (!resultDataSet[year]) {
      resultDataSet[year] = [ ...INITIAL_DIV_CHART_DATA()]
    }

    // @ts-ignore TODO:
    dividendTransactionsWithShortMonthNamesForParticularYear.forEach((dividendTransaction: NonTradeTransaction<"DIVIDEND">) => {
      const index = resultDataSet[year].findIndex(divMonth => divMonth.month === dividendTransaction.time)
      resultDataSet[year][index].receivedDividendAmount = Number( ( resultDataSet[year][index].receivedDividendAmount + Number(dividendTransaction.price.toFixed(2)) ).toFixed(2) ) // TODO: - Div tax,
    });
  })

  return resultDataSet
}

export default getDivChartDataSetNormalizedByShortMonthName