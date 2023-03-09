import { AssetOpenPosition } from "@core";
import { DivChartYearlyData } from "../types";
import getDivChartDataSetNormalizedByShortMonthName from "./getDivChartDataSetNormalizedByShortMonthName";

 const getDivChartDataSet = (openPositions: AssetOpenPosition[]): DivChartYearlyData => {
  const dataSet = openPositions.map(openPosition => {
    const divDataNormalizedByYears = getDivChartDataSetNormalizedByShortMonthName(openPosition.payedDividendTransactions)

    openPosition.payedDividendTransactions.forEach(payedDividend => {
      payedDividend.time
    });

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