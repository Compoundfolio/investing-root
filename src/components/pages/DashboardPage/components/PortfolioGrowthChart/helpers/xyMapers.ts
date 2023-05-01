export const getValueChartDataEntity = ([ xDate, yPrices ]) => ({
  x: xDate,
  y: yPrices.reduce((prev, cur) => prev + cur.y, 0) // Get total d&w by specific date 
})

export const addPrevDatePrice = ({ x, y }, index, mappedArray) => ({
  x,
  y: y + (mappedArray[index-1]?.y ?? 0) // Get total d&w by specific date + prev date 
})

export const fromNormalizedToObject = ([ xDate, yPrice ]) => ({
  x: xDate,
  y: yPrice
})