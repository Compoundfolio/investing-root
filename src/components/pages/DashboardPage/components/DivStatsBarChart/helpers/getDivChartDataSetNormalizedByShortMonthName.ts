import { NonTradeTransaction } from 'src/core/types';
import { getMonthShortNameFromDate, getYearByDate, normalizeArrayOfObjectsBy } from '@core';
import getDividendNumbersForEachMonth from './getDividendNumbersForEachMonth';
import { DivChartDataSet } from '../types';

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
  ) // 2023: []

  let resultDataSet: DivChartDataSet = {}

  Object.entries(normalizedDivDataByYear).forEach(([year, dividendTransactionsWithShortMonthNamesForParticularYear]) => {
    resultDataSet[year] = getDividendNumbersForEachMonth(
      dividendTransactionsWithShortMonthNamesForParticularYear as NonTradeTransaction<"DIVIDEND">[]
    )
  })


  return resultDataSet
}

export default getDivChartDataSetNormalizedByShortMonthName