import { Currency, Transaction } from "src/core/types"
import {v4 as uuidv4} from 'uuid';
import { ExanteCsvData } from "../../__types__";
import { getOperation, getPartsFromSymbolId, getTime, getTransactionType } from "./helpers";
import { getExanteTransactionsList, parseNumber } from "@core";

const formatExanteCsvTransactions = (reportUnParsedData: string): Transaction[] => {
  let compaundfolioTransactions: Transaction[] = []

  const csvData = getExanteTransactionsList(reportUnParsedData)

  for (const exanteTransaction of csvData) {
    compaundfolioTransactions.push({
      id: exanteTransaction["Order Id"] ?? uuidv4(),
      type: getTransactionType(exanteTransaction),
      time: getTime(exanteTransaction),
      currency: exanteTransaction.Currency as Currency,
      ticker: getPartsFromSymbolId(exanteTransaction["Symbol ID"]).ticker,
      stockExchange: getPartsFromSymbolId(exanteTransaction["Symbol ID"]).exchange,
      orderPrice: parseNumber(exanteTransaction.Price),
      orderAmount: parseNumber(exanteTransaction.Quantity),
      commission: parseNumber(exanteTransaction.Commission),
      operation: getOperation(exanteTransaction.Side),
    })
  } 

  return compaundfolioTransactions
}

export default formatExanteCsvTransactions