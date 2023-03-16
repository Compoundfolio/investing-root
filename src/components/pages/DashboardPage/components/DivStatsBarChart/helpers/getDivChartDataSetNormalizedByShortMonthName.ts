import { NonTradeTransaction } from 'src/core/types';
import { getMonthShortNameFromDate, getYearByDate, normalizeArrayOfObjectsBy } from '@core';
import getDividendNumbersForEachMonth from './getDividendNumbersForEachMonth';
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
  ) // 2023: []

  let resultDataSet: DivChartDataSet = {}

  payedDividendTransactions[0]?.ticker === "SCHD" && console.log(Object.entries(normalizedDivDataByYear), Object.entries(normalizedDivDataByYear).length);
  

  Object.entries(normalizedDivDataByYear).forEach(([year, dividendTransactionsWithShortMonthNamesForParticularYear]) => {
    payedDividendTransactions[0]?.ticker === "SCHD" && console.log(1);
    
    if (!resultDataSet[year]) {
      resultDataSet[year] = [
        {
          "month": "Jan",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Feb",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Mar",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Apr",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "May",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Jun",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Jul",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Aug",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Sep",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Oct",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Nov",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
        {
          "month": "Dec",
          "receivedDividendAmount": 0,
          "announcedDividendAmount": 0,
          "estimatedNotReceivedDividendAmount": 0,
        },
      ]
    }

    payedDividendTransactions[0]?.ticker === "SCHD" && console.log(resultDataSet[year]);

    // @ts-ignore
    dividendTransactionsWithShortMonthNamesForParticularYear.forEach((dividendTransaction: NonTradeTransaction<"DIVIDEND">) => {
      const index = resultDataSet[year].findIndex(divMonth => divMonth.month === dividendTransaction.time)
      resultDataSet[year][index].receivedDividendAmount += Number(dividendTransaction.price.toFixed(2)) // TODO: - Div tax,
    });

    // resultDataSet[year] = getDividendNumbersForEachMonth(
    //   dividendTransactionsWithShortMonthNamesForParticularYear as NonTradeTransaction<"DIVIDEND">[]
    // )
  })

  payedDividendTransactions[0]?.ticker === "SCHD" && console.log(resultDataSet[2022]);


  return resultDataSet
}

export default getDivChartDataSetNormalizedByShortMonthName