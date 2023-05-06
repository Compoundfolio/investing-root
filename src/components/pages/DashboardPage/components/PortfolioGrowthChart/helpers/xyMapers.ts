import { formatToXyListFromDictionary, getIsoDatesDaysBetweenTwoDates, normalizeArrayOfObjectsBy } from "@core";
import { ValueChartDataSet } from "../types";

export const getValueChartDataEntity = ([xDate, yPrices]) => ({
  x: xDate,
  y: yPrices.reduce((prev, cur) => prev + cur.y, 0) // Get total value by specific date 
})

export const fromNormalizedToObject = ([xDate, yPrice]) => ({
  x: xDate,
  y: yPrice
})

export const sumYValues = (xyList: ValueChartDataSet): ValueChartDataSet => {
  let summedXyValues: ValueChartDataSet = []
  let lastSummedXyYValue: number = 0

  xyList.forEach(({ x, y }) => {
    summedXyValues.push({
      x,
      y: y + lastSummedXyYValue // Get total value by specific date + prev date 
    })

    lastSummedXyYValue = y + lastSummedXyYValue
  });

  return summedXyValues
}

export const fillValueChartWithEmptyDays = (firstBrokerageTransactionDate: Date) => {
  const todayDate = new Date()
  const FILL_BY = 0 as const

  const isoDatesDaysFromFirstTransactionTillYesterday = getIsoDatesDaysBetweenTwoDates(
    firstBrokerageTransactionDate, 
    todayDate, 
    FILL_BY
  )  

  return normalizeArrayOfObjectsBy(
    formatToXyListFromDictionary(isoDatesDaysFromFirstTransactionTillYesterday),
    "x"
  )
}