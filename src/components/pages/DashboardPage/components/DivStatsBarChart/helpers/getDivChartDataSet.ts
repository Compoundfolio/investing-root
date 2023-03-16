import { AssetOpenPosition, parseNumber } from '@core';
import { DivChartDataSet, DivChartYearlyDataEntity } from "../types";
import getDivChartDataSetNormalizedByShortMonthName from "./getDivChartDataSetNormalizedByShortMonthName";
import { INITIAL_DIV_CHART_DATA } from "../const";

 const getDivChartDataSet = (openPositions: AssetOpenPosition[]): DivChartDataSet => {
  let divChartDataSet: DivChartDataSet = {}

  openPositions.forEach(openPosition => {
    const divDataNormalizedByYears = getDivChartDataSetNormalizedByShortMonthName(openPosition.payedDividendTransactions)
    openPosition.ticker === "SCHD" && console.log(openPosition.ticker, divDataNormalizedByYears);
    
    
    Object.entries(divDataNormalizedByYears).forEach(([ year, dividendMonths ]) => {
      if (!divChartDataSet[year]) {
        divChartDataSet[year] = INITIAL_DIV_CHART_DATA
      }      
      
      dividendMonths.forEach((dividendMonth) => {
        const index = divChartDataSet[year].findIndex(divMonth => divMonth.month === dividendMonth.month)

        divChartDataSet[year][index] = {
          ...divChartDataSet[year][index],
          // "month": dividendMonth.month,
          "receivedDividendAmount": parseNumber(divChartDataSet[year][index].receivedDividendAmount ?? 0) + parseNumber(dividendMonth.receivedDividendAmount ?? 0), // TODO: - Div tax
          // "announcedDividendAmount": 0, // TODO:
          // "estimatedNotReceivedDividendAmount": 0 // TODO:
        } as DivChartYearlyDataEntity
      })
    });
  })

  return divChartDataSet
}

export default getDivChartDataSet