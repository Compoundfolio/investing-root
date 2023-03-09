import { useState } from "react"

const useDividendYearSwitch = (dataSet) => {
  const [selectedYearDividendsData, setSelectedYearDividendsData] = useState(dataSet[new Date().getFullYear()])

  const onYearBack = (year: number) => {
    setSelectedYearDividendsData(dataSet[year])
  }

  const onYearForward = (year: number) => {
    setSelectedYearDividendsData(dataSet[year])
  }

  return {
    selectedYearDividendsData,
    onYearBack,
    onYearForward,
  }
}

export default useDividendYearSwitch