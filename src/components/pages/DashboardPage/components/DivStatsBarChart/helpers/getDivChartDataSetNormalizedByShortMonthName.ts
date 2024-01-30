import { NonTradeTransaction } from "src/core/types"
import {
  getMonthShortNameFromDate,
  getYearByDate,
  normalizeArrayOfObjectsBy,
  parseNumberToFixed2,
} from "@core"
import { DivChartDataSet } from "../types"
import { INITIAL_DIV_CHART_DATA } from "../const"

// TODO: Types
// TODO: Rename the function and variables
const getDivChartDataSetNormalizedByShortMonthName = (
  payedDividendTransactions: NonTradeTransaction<"DIVIDEND">[]
) => {
  const payedDividendTransactionsWithShortMonthNames =
    payedDividendTransactions.map((payedDividendTransaction) => ({
      ...payedDividendTransaction,
      time: getMonthShortNameFromDate(payedDividendTransaction.time),
      year: getYearByDate(payedDividendTransaction.time),
    }))

  const normalizedDivDataByYear = normalizeArrayOfObjectsBy(
    payedDividendTransactionsWithShortMonthNames,
    "year"
  )

  let resultDataSet: DivChartDataSet = {}

  Object.entries(normalizedDivDataByYear).forEach(
    ([year, dividendTransactionsWithShortMonthNamesForParticularYear]) => {
      if (!resultDataSet[year]) {
        resultDataSet[year] = [...INITIAL_DIV_CHART_DATA()]
      }

      // @ts-ignore TODO:
      dividendTransactionsWithShortMonthNamesForParticularYear.forEach(
        (dividendTransaction: NonTradeTransaction<"DIVIDEND">) => {
          const index = resultDataSet[year].findIndex(
            (divMonth) => divMonth.month === dividendTransaction.time
          )
          resultDataSet[year][index].receivedDividendAmount =
            parseNumberToFixed2(
              resultDataSet[year][index].receivedDividendAmount +
                dividendTransaction.price
            ) // TODO: - Div tax,
        }
      )
    }
  )

  return resultDataSet
}

export default getDivChartDataSetNormalizedByShortMonthName
