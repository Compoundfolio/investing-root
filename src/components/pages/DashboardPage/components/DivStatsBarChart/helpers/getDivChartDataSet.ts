import { AssetPosition, parseNumberToFixed2 } from '@core';
import { DivChartDataSet } from "../types";
import getDivChartDataSetNormalizedByShortMonthName from "./getDivChartDataSetNormalizedByShortMonthName";
import { INITIAL_DIV_CHART_DATA } from "../const";

 const getDivChartDataSet = (allPositions: AssetPosition[]): DivChartDataSet => {
  let divChartDataSet: DivChartDataSet = {}
  
  allPositions.forEach(openPosition => {    
    const divDataNormalizedByYears = getDivChartDataSetNormalizedByShortMonthName(
      openPosition.payedDividendTransactions
    )
    
    Object
      .entries(divDataNormalizedByYears)
      .forEach(([ year, dividendMonths ]) => {
        if (!divChartDataSet[year]) {
          divChartDataSet[year] = [ ...INITIAL_DIV_CHART_DATA() ]
        }      
                
        dividendMonths.forEach((dividendMonth) => {          
          const index: number = divChartDataSet[year].findIndex(divMonth => divMonth.month === dividendMonth.month)          
          divChartDataSet[year][index].receivedDividendAmount = parseNumberToFixed2(divChartDataSet[year][index].receivedDividendAmount + dividendMonth.receivedDividendAmount)        
        })
    });
  })  

  return divChartDataSet
}

export default getDivChartDataSet