import {
  NonTradeTransaction,
  normalizeArrayOfObjectsBy,
  oldDatesFirst,
  parseNumberToFixed2,
} from "@core"
import { NormalizedValueChartDataSet, ValueChartDataSet } from "../types"
import { format } from "date-fns"
import { getValueChartDataEntity } from "./xyMapers"

// TODO: Optimize complexity + reuse functionality from getDepositsAndWithdrawals fn
const getCommissions = (
  allNonTradeTransactions: NonTradeTransaction[]
): NormalizedValueChartDataSet => {
  const commissionsXyList = allNonTradeTransactions
    .filter((transaction) => transaction.type === "COMMISSION")
    .map(({ time, price }) => ({
      x: format(new Date(time), "yyyy-MM-dd"),
      y: price,
    }))
    .sort(oldDatesFirst)

  const normalizedCommissionsXyList = normalizeArrayOfObjectsBy(
    commissionsXyList,
    "x"
  ) as NormalizedValueChartDataSet

  const summedCommissionsXyList: ValueChartDataSet = Object.entries(
    normalizedCommissionsXyList
  ).map(getValueChartDataEntity)

  return normalizeArrayOfObjectsBy(
    summedCommissionsXyList,
    "x"
  ) as NormalizedValueChartDataSet
}

export default getCommissions
