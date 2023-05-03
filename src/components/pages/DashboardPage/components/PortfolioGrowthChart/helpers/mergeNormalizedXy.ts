import { NormalizedValueChartDataSet, ValueChartDataSet } from "../types";
import { mergeWith } from "lodash"
import { fromNormalizedToObject } from "./xyMapers";
import { sumNormalizedArraysOfNumbers } from "@core";

function mergeNormalizedXy(...args: NormalizedValueChartDataSet[]): ValueChartDataSet {
  let uniqueYears = {} as NormalizedValueChartDataSet

  args.forEach(arg => {
    mergeWith(uniqueYears, arg, sumNormalizedArraysOfNumbers("y"));
  })

  return Object
    .entries(uniqueYears)
    .map(fromNormalizedToObject)
}

export default mergeNormalizedXy