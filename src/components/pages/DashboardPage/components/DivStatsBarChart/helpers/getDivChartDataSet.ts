import { AssetOpenPosition } from "@core";
import { DivChartDataSet, DivChartYearlyData } from "../types";
import getDivChartDataSetNormalizedByShortMonthName from "./getDivChartDataSetNormalizedByShortMonthName";

 const getDivChartDataSet = (openPositions: AssetOpenPosition[]): DivChartYearlyData => {
  let divChartDataSet: DivChartDataSet = {}

  const dataSet = openPositions.map(openPosition => {
    const divDataNormalizedByYears = getDivChartDataSetNormalizedByShortMonthName(openPosition.payedDividendTransactions)

    Object.entries(divDataNormalizedByYears).forEach(([ year, dividendMonths ]) => {
      dividendMonths.forEach(dividendMonth => {
        divChartDataSet[year] = {
          
        }
      })
    });

    resultDataSet[year] = getDividendNumbersForEachMonth(
      dividendTransactionsWithShortMonthNamesForParticularYear as NonTradeTransaction<"DIVIDEND">[]
    )

    return {
      month
    }
  }) as any

  return dataSet
}

export default getDivChartDataSet

// 

// {
//   month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"
//   receivedDividendAmount?: number
//   announcedDividendAmount?: number
//   estimatedNotReceivedDividendAmount?: number
// }