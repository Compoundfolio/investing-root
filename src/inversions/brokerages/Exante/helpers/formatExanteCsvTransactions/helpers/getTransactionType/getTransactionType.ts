import { parseNumber } from '@core';
import { BrokerageTransactionType } from 'src/core/types';
import { ExanteCsvTransaction } from 'src/inversions/brokerages/Exante/__types__';

// TODO: Refactor
const getTransactionType = ({ 
  "Trade type": TradeType, 
  ISIN, 
  Price 
}: ExanteCsvTransaction): BrokerageTransactionType | undefined => {
  const exanteType = TradeType ?? ISIN

  if (!exanteType) return

  if (exanteType === "TRADE") return "TRADE"

  if (exanteType === "DIVIDEND") return "DIVIDEND"

  if (exanteType === "COMMISSION") return "COMMISSION"
  
  if (exanteType === "TAX" || exanteType === "US TAX") return "TAX"

  if (exanteType === "FUNDING/WITHDRAWAL") {
    const operationPrice = parseNumber(Price)
    if (!operationPrice) return 
    
    return operationPrice > 0 
      ? "DEPOSIT"
      : "WITHDRAWAL"
  }

}

export default getTransactionType