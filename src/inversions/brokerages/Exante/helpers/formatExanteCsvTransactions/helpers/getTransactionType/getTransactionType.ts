import { parseNumber } from '@core';
import { BrokerageTransactionType } from 'src/core/types';
import { ExanteCsvTransaction, ExanteCsvNonTradeTransaction } from 'src/inversions/brokerages/Exante/__types__';

// TODO: Refactor
const getTransactionType = ( 
  type: ExanteCsvTransaction["Trade type"] | ExanteCsvNonTradeTransaction["Operation Type"], 
  ISIN: string, 
  price: number
): BrokerageTransactionType | undefined => {
  const exanteType = type ?? ISIN

  if (!exanteType) return

  if (exanteType === "TRADE") return "TRADE"

  if (exanteType === "DIVIDEND") return "DIVIDEND"

  if (exanteType === "COMMISSION") return "COMMISSION"
  
  if (exanteType === "TAX" || exanteType === "US TAX") return "TAX"

  if (exanteType === "FUNDING/WITHDRAWAL") {
    const operationPrice = parseNumber(price)
    if (!operationPrice) return 
    
    return operationPrice > 0 
      ? "DEPOSIT"
      : "WITHDRAWAL"
  }

}

export default getTransactionType