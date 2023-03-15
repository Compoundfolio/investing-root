import { NonTradeTransaction, ShortMonthName, normalizeArrayOfObjectsBy, parseNumber } from "@core"
import { DivChartYearlyData, DivChartYearlyDataEntity } from "../types"
import { INITIAL_DIV_CHART_DATA } from "../const"

// TODO: Refactor ...
const getDividendNumbersForEachMonth = (
  dividendTransactionsWithShortMonthNamesForParticularYear: NonTradeTransaction<"DIVIDEND">[]
): DivChartYearlyData => {
  let resultDivMonths = INITIAL_DIV_CHART_DATA 
  let f = 0

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
      // console.log(2,resultDivMonths);

      divTransactions.forEach(divTransaction => {
        // i ===0 && console.log(123,index,resultDivMonths[index],divTransaction.price);
        // console.log(resultDivMonths[index].receivedDividendAmount)
        
        // console.log(resultDivMonths[index].receivedDividendAmount, Number(divTransaction.price.toFixed(2)))
        resultDivMonths[index].receivedDividendAmount += Number(divTransaction.price.toFixed(2)) // TODO: - Div tax,
        f += Number(divTransaction.price.toFixed(2))
      })
    })

    // TODO: Sort month in right order...
console.log(f)

  return resultDivMonths
}

export default getDividendNumbersForEachMonth