import { AssetOpenPosition } from "@core";
import { DivChartDataSet, DivChartYearlyDataEntity } from "../types";
import getDivChartDataSetNormalizedByShortMonthName from "./getDivChartDataSetNormalizedByShortMonthName";

 const getDivChartDataSet = (openPositions: AssetOpenPosition[]): DivChartDataSet => {
  let divChartDataSet: DivChartDataSet = {}

  openPositions.forEach(openPosition => {
    const divDataNormalizedByYears = getDivChartDataSetNormalizedByShortMonthName(openPosition.payedDividendTransactions)
    console.log(divDataNormalizedByYears, openPosition.payedDividendTransactions);
    
    Object.entries(divDataNormalizedByYears).forEach(([ year, dividendMonths ]) => {
      dividendMonths.forEach((dividendMonth, index) => {
        
        if (!divChartDataSet[year]?.[index]) {
          divChartDataSet[year] = []
        }

        divChartDataSet[year][index] = {
          ...dividendMonth,
          "month": dividendMonth.month,
          "receivedDividendAmount": (divChartDataSet[year]?.[index]?.receivedDividendAmount ?? 0) + (dividendMonth.receivedDividendAmount ?? 0),
          "announcedDividendAmount": 0, // TODO:
          "estimatedNotReceivedDividendAmount": 0 // TODO:
        } as DivChartYearlyDataEntity
      })
    });
  })

  return divChartDataSet
}

export default getDivChartDataSet