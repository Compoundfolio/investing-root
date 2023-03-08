import { AssetOpenPosition } from "@core";
import { DivChartData } from "../types";

export const getDivChartDataSet = (openPositions: AssetOpenPosition[]): DivChartData => {
  const dataSet = openPositions.map(openPosition => {
    openPosition.payedDividendTransactions.forEach(payedDividend => {
      payedDividend.time
    });

    return {
      month
    }
  }) as any

  return dataSet
}

// 

// {
//   month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"
//   receivedDividendAmount?: number
//   announcedDividendAmount?: number
//   estimatedNotReceivedDividendAmount?: number
// }