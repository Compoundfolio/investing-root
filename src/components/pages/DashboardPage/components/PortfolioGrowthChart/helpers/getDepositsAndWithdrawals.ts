import {
  NonTradeTransaction,
  normalizeArrayOfObjectsBy,
  oldDatesFirst,
} from "@core"
import { format } from "date-fns"
import {
  NormalizedValueChartDataSet,
  ValueChartDataSet,
  ValueChartDataSetEntity,
} from "../types"
import { getValueChartDataEntity } from "./xyMapers"

// TODO: Optimize complexity
const getDepositsAndWithdrawals = (
  allNonTradeTransactions: NonTradeTransaction[]
): NormalizedValueChartDataSet => {
  const xyArr = allNonTradeTransactions
    .filter(
      (transaction) =>
        transaction.type === "DEPOSIT" || transaction.type === "WITHDRAWAL"
    )
    .map<ValueChartDataSetEntity>(({ time, price, type }) => ({
      x: format(new Date(time), "yyyy-MM-dd"),
      y: type === "WITHDRAWAL" ? -price : price,
    }))
    .sort(oldDatesFirst)

  const normalizedDepositsAndWithdrawalsPricesByDate =
    normalizeArrayOfObjectsBy(xyArr, "x") as NormalizedValueChartDataSet

  const dataSet: ValueChartDataSet = Object.entries(
    normalizedDepositsAndWithdrawalsPricesByDate
  ).map(getValueChartDataEntity)

  return normalizeArrayOfObjectsBy(dataSet, "x") as NormalizedValueChartDataSet
}

export default getDepositsAndWithdrawals
