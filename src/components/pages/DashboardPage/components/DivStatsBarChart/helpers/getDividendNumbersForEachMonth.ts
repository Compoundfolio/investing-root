import { NonTradeTransaction, ShortMonthName, normalizeArrayOfObjectsBy, parseNumber } from "@core"
import { DivChartYearlyData, DivChartYearlyDataEntity } from "../types"
import { INITIAL_DIV_CHART_DATA } from "../const"

// TODO: Refactor ...
const getDividendNumbersForEachMonth = (
  dividendTransactionsWithShortMonthNamesForParticularYear: NonTradeTransaction<"DIVIDEND">[]
): DivChartYearlyData => {
  let resultDivMonths = [
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
  ] as any
  // let f = 0

  // TODO: Types
  const normalizedDivTransactionsByMonthShortName = normalizeArrayOfObjectsBy(
    dividendTransactionsWithShortMonthNamesForParticularYear,
    "time"
  ) as {
    [K in ShortMonthName]: NonTradeTransaction<"DIVIDEND">[]
  }  
  // console.log(1,resultDivMonths);
  
  Object
    .entries(normalizedDivTransactionsByMonthShortName)
    .forEach(([ monthShortName, divTransactions ], i) => {
      const index = resultDivMonths.findIndex(divMonth => divMonth.month === monthShortName)

      divTransactions.forEach(divTransaction => {
        resultDivMonths[index].receivedDividendAmount += Number(divTransaction.price.toFixed(2)) // TODO: - Div tax,
      })
    })

    // TODO: Sort month in right order...
// console.log(resultDivMonths)

  return resultDivMonths
}

export default getDividendNumbersForEachMonth