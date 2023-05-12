import { oldDatesFirst, normalizeArrayOfObjectsBy, Transaction, OrderOperation } from "@core"
import { format } from "date-fns"
import { NormalizedValueChartDataSet, ValueChartDataSet } from "../types"
import { getValueChartDataEntity } from "./xyMapers"

const getGains = (tradeTransactions: Transaction[]): NormalizedValueChartDataSet => {
  const commissionsXyList = tradeTransactions
    .filter(({ type, operation }) => type === "TRADE" && operation === OrderOperation.SELL)
    .map(({ time, gain }) => ({
      x: format(new Date(time), "yyyy-MM-dd"),
      y: gain
    }))
    .sort(oldDatesFirst)

  const normalizedCommissionsXyList = normalizeArrayOfObjectsBy(
    commissionsXyList,
    "x",
  ) as NormalizedValueChartDataSet

  const summedCommissionsXyList: ValueChartDataSet = Object
    .entries(normalizedCommissionsXyList)
    .map(getValueChartDataEntity)

  return normalizeArrayOfObjectsBy(
    summedCommissionsXyList,
    "x",
  ) as NormalizedValueChartDataSet
}

export default getGains