import { useState, useEffect } from 'react';
import { DivChartDataSet, DivChartYearlyData } from "../types"

const currentYear = new Date().getFullYear()

const useDividendYearSwitch = (dataSet: DivChartDataSet) => {
  const [ selectedYearDividendsData, setSelectedYearDividendsData ] = useState<DivChartYearlyData>(dataSet[currentYear])
  const [ selectedYear, setSelectedYear ] = useState<number>(currentYear)

  const yearsList = Object.keys(dataSet)

  const onYearBack = () => {    
    setSelectedYear(prev => yearsList.includes(`${prev - 1}`) ? prev - 1 : prev)
  }

  const onYearForward = () => {
    setSelectedYear(prev => yearsList.includes(`${prev + 1}`) ? prev + 1 : prev)
  }

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