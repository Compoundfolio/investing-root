import { Currency, NonTradeTransaction, NonTradeTransactionTypes, Transaction } from "src/core/types"
import { v4 as uuidv4 } from 'uuid';
import { getOperation, getPartsFromSymbolId, getTime, getTransactionType } from "./helpers";
import { getExanteNonTradeTransactionsList, getExanteTransactionsList, parseNumber } from "@core";

const formatExanteCsvTransactions = (reportUnParsedData: string) => {
  let parsedTradeTransactions: Transaction[] = []
  let parsedNonTradeTransactions: NonTradeTransaction[] = []

  const secondTablePos = reportUnParsedData.indexOf("Transaction ID")

  const tradeTransactionsSourceString = reportUnParsedData.substring(0, secondTablePos)
  const tradeTransactions = getExanteTransactionsList(tradeTransactionsSourceString)  

  const nonTradeTransactionsSourceString = reportUnParsedData.substr(secondTablePos)
  const nonTradeTransactions = getExanteNonTradeTransactionsList(nonTradeTransactionsSourceString)
  
  // Trade transactions
  for (const exanteTradeTransaction of tradeTransactions) {
    parsedTradeTransactions.push({
      id: exanteTradeTransaction["Order Id"] ?? uuidv4(),
      type: getTransactionType(exanteTradeTransaction),
      time: getTime(exanteTradeTransaction.Time),
      currency: exanteTradeTransaction.Currency as Currency,
      ticker: getPartsFromSymbolId(exanteTradeTransaction["Symbol ID"])?.ticker,
      stockExchange: getPartsFromSymbolId(exanteTradeTransaction["Symbol ID"])?.exchange,
      orderPrice: parseNumber(exanteTradeTransaction.Price),
      orderAmount: parseNumber(exanteTradeTransaction.Quantity),
      commission: parseNumber(exanteTradeTransaction.Commission),
      operation: getOperation(exanteTradeTransaction.Side), // TODO: Remove
    })
  }   

  // Rest transactions
  for (const exanteNonTradeTransaction of nonTradeTransactions) {
    parsedNonTradeTransactions.push({
      id: exanteNonTradeTransaction["UUID"],
      parentId: exanteNonTradeTransaction["Parent UUID"],
      comment: exanteNonTradeTransaction["Comment"],
      type: getTransactionType(exanteNonTradeTransaction["Operation type"]) as NonTradeTransactionTypes,
      time: exanteNonTradeTransaction["When"],
      currency: exanteNonTradeTransaction["Asset"],
      ticker: getPartsFromSymbolId(exanteNonTradeTransaction["Symbol ID"])?.ticker ?? null,
      stockExchange: getPartsFromSymbolId(exanteNonTradeTransaction["Symbol ID"])?.exchange ?? null,
      price: parseNumber(exanteNonTradeTransaction["Sum"]),
    })
  } 

  return {
    parsedTradeTransactions,
    parsedNonTradeTransactions,
  }
}

export default formatExanteCsvTransactions