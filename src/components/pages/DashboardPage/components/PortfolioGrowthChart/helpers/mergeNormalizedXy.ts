import { NormalizedValueChartDataSet, ValueChartDataSet } from "../types";
import { isArray, mergeWith } from "lodash"
import { fromNormalizedToObject } from "./xyMapers";

function customize(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue
      .concat(srcValue)
      .reduce((prev, cur) => prev + cur.y, 0);
  }
}

function mergeNormalizedXy(...args: NormalizedValueChartDataSet[]): ValueChartDataSet {
  let uniqueYears = {} as NormalizedValueChartDataSet

  args.forEach(arg => {
    mergeWith(uniqueYears, arg, customize);
  })

  return Object
    .entries(uniqueYears)
    .map(fromNormalizedToObject)
}

export default mergeNormalizedXy