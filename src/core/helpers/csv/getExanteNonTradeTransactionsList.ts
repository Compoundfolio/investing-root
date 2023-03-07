import { ExanteCsvNonTradeTransaction } from "src/inversions/brokerages/Exante/__types__"
import getExanteTransactionsList from "./getExanteTransactionsList"

const getExanteNonTradeTransactionsList = (csvString: string): ExanteCsvNonTradeTransaction[] => {
  const parsedCsvTransactionsList = getExanteTransactionsList<ExanteCsvNonTradeTransaction[]>(csvString)
  return parsedCsvTransactionsList.filter(transaction => transaction["Operation type"] !== "TRADE")
}

export default getExanteNonTradeTransactionsList