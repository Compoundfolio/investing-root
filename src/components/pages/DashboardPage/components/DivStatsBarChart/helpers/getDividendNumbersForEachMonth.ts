import { NonTradeTransaction, ShortMonthName, normalizeArrayOfObjectsBy } from "@core"
import { DivChartYearlyData, DivChartYearlyDataEntity } from "../types"

// TODO: Refactor ...
const getDividendNumbersForEachMonth = (
  dividendTransactionsWithShortMonthNamesForParticularYear: NonTradeTransaction<"DIVIDEND">[]
): DivChartYearlyData => {

  // TODO: Types
  const normalizedDivTransactionsByMonthShortName = normalizeArrayOfObjectsBy(
    dividendTransactionsWithShortMonthNamesForParticularYear,
    "time"
  ) as {
    [K in ShortMonthName]: NonTradeTransaction<"DIVIDEND">[]
  }

  const divsByMonth = Object
    .entries(normalizedDivTransactionsByMonthShortName)
    .map(([ monthShortName, divTransactions ]) => ({
      month: monthShortName,
      receivedDividendAmount: divTransactions.reduce((
        prevValue: number, 
        currentTransaction: NonTradeTransaction<"DIVIDEND">
      ) => prevValue + currentTransaction.price, 0),
      "announcedDividendAmount": 0, // TODO:
      "estimatedNotReceivedDividendAmount": 0 // TODO:
    }) as DivChartYearlyDataEntity)

    // TODO: Sort month in right order...


  return divsByMonth
}

export default getDividendNumbersForEachMonth