import { NormalizedValueChartDataSet, ValueChartDataSet } from "../types"
import { mergeWith } from "lodash"
import { fromNormalizedToObject, sumYValues } from "./xyMapers"
import { oldDatesFirst, sumNormalizedArraysOfNumbers } from "@core"

function mergeNormalizedXy(
  ...args: NormalizedValueChartDataSet[]
): ValueChartDataSet {
  let uniqueYears = {} as NormalizedValueChartDataSet

  args.forEach((arg) => {
    mergeWith(uniqueYears, arg, sumNormalizedArraysOfNumbers("y"))
  })

  const xyList = Object.entries(uniqueYears)
    .map(fromNormalizedToObject)
    .sort(oldDatesFirst)

  const mergedSumOfXyValues = sumYValues(xyList)

  return mergedSumOfXyValues
}

export default mergeNormalizedXy
