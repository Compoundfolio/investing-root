import { NonTradeTransaction, oldDatesFirst } from "@core"
import { format } from "date-fns"
import { ValueChartDataSetEntity } from "../types"

const getDepositsAndWithdrawals = (allNonTradeTransactions: NonTradeTransaction[]): ValueChartDataSetEntity[] => {
  return allNonTradeTransactions
    .filter(transaction => 
      transaction.type === "DEPOSIT" || 
      transaction.type === "WITHDRAWAL"
    )
    .map<ValueChartDataSetEntity>(({ time, price, type }) => ({ 
      x: format(new Date(time), "yyyy-MM-dd"), 
      y: type === "WITHDRAWAL" ? -price : price
    }))
    .sort(oldDatesFirst)
}

export default getDepositsAndWithdrawals