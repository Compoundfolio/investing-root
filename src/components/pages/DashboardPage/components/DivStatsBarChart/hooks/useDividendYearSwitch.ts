import { useState, useEffect, useCallback } from 'react';
import { DivChartDataSet, DivChartYearlyData } from "../types"

const currentYear = new Date().getFullYear()

const useDividendYearSwitch = (dataSet: DivChartDataSet) => {
  const [ selectedYearDividendsData, setSelectedYearDividendsData ] = useState<DivChartYearlyData>(dataSet[currentYear])
  const [ selectedYear, setSelectedYear ] = useState<number>(currentYear)

  const yearsList = Object.keys(dataSet)
  
  const onYearBack = useCallback(() => {    
    setSelectedYear(prev => yearsList.includes(`${prev - 1}`) ? prev - 1 : prev)
  }, [yearsList])

  const onYearForward = useCallback(() => {
    setSelectedYear(prev => yearsList.includes(`${prev + 1}`) ? prev + 1 : prev)
  }, [yearsList])

  useEffect(() => {
    setSelectedYearDividendsData(dataSet[selectedYear])
  }, [selectedYear])

  return {
    selectedYear,
    selectedYearDividendsData,
    onYearBack,
    onYearForward,
  }
}

export default useDividendYearSwitch