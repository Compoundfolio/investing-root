import { format, differenceInDays } from "date-fns"
import { ValueChartDataSet } from "../types"

/**
 * In case the value chart doesn't contain any data for current day date,
 * we add it at the end with last date value. 
 */
const addCurrentDayXyAtTheEnd = (dataSet: ValueChartDataSet): ValueChartDataSet => {
  const lastDataSetEntity = dataSet[dataSet.length-1]
  const currentDayDate = format(new Date(), "yyyy-MM-dd")
  const noTransactionsMadeByToday = differenceInDays(new Date(currentDayDate), new Date(lastDataSetEntity.x)) > 0
  
  return noTransactionsMadeByToday
    ? [...dataSet, {
      x: currentDayDate,
      y: lastDataSetEntity.y,
    }]
    : dataSet
}

export default addCurrentDayXyAtTheEnd