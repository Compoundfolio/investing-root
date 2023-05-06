import { ValueChartDataSet } from "../types";

export const getValueChartDataEntity = ([xDate, yPrices]) => ({
  x: xDate,
  y: yPrices.reduce((prev, cur) => prev + cur.y, 0) // Get total value by specific date 
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

export const fromNormalizedToObject = ([xDate, yPrice]) => ({
  x: xDate,
  y: yPrice
})