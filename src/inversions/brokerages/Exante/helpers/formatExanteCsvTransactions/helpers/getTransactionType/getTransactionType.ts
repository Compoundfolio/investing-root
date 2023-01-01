import { parseNumber } from '@core';
import { BrokerageTransactionType } from 'src/core/types';
import { ExanteCsvTransaction } from 'src/inversions/brokerages/Exante/__types__';

const getTransactionType = ({ 
  "Trade type": TradeType, 
  ISIN, 
  Price 
}: ExanteCsvTransaction): BrokerageTransactionType | undefined => {
  const exanteType = TradeType ?? ISIN

  if (!exanteType) return

  if (exanteType === "TRADE") return BrokerageTransactionType.TRADE

  if (exanteType === "DIVIDEND") return BrokerageTransactionType.DIVIDEND

  if (exanteType === "COMMISSION") return BrokerageTransactionType.COMMISSION
  
  if (exanteType === "TAX") return BrokerageTransactionType.TAX

  if (exanteType === "FUNDING/WITHDRAWAL") {
    const operationPrice = parseNumber(Price)
    if (!operationPrice) return 
    return operationPrice > 0 
      ? BrokerageTransactionType.DEPOSIT
      : BrokerageTransactionType.WITHDRAWAL
  }

}

export default getTransactionType