import { BrokerageTransactionType, NormalizedTransactionsByTicker, OrderOperation, Transaction } from 'src/core/types';
import { parseNumber } from '../formaters';

const getCurrentPositionPrice = (transactionsList: Transaction[]) => {
  return transactionsList.reduce((
    prevValue: number, 
    currentTransaction: Transaction
  ) => {
    const isTrade = currentTransaction.type === BrokerageTransactionType.TRADE

    if (isTrade && currentTransaction.operation === OrderOperation.BUY) {
      return prevValue + ((parseNumber(currentTransaction.orderPrice) ?? 0 * (currentTransaction.orderAmount ?? 1)) ?? 0)
    } 
    
    if (isTrade && currentTransaction.operation === OrderOperation.SELL) {
      return prevValue - ((parseNumber(currentTransaction.orderPrice) ?? 0 * (currentTransaction.orderAmount ?? 1)) ?? 0)
    }

    return 0
  }, 0)
}

const getAllPositionsByBrokerageTransactions = (
  transactionsByTicker: NormalizedTransactionsByTicker
) => {  
  let positions = {
    openPositions: {},
    closedPositions: {},
  }

  Object
    .entries(transactionsByTicker)
    .forEach(([ ticker, transactionsList ]) => {
      const openPositionsByCurrentTicker = transactionsList.reduce((
        prevValue: number, 
        currentTransaction: Transaction
      ) => {
        const isTrade = currentTransaction.type === BrokerageTransactionType.TRADE
        if (isTrade && currentTransaction.operation === OrderOperation.BUY) {
          return prevValue + (parseNumber(currentTransaction.orderAmount) ?? 0)
        } 

        if (isTrade && currentTransaction.operation === OrderOperation.SELL) {
          return prevValue - (parseNumber(currentTransaction.orderAmount) ?? 0)
        }

        return 0
      }, 0)

      
      
      const openPositionData = {
        sharesAmount: openPositionsByCurrentTicker,
        currentPositionPrice: getCurrentPositionPrice(transactionsList)
      }

      console.log(ticker, openPositionData);

      if (openPositionsByCurrentTicker > 0) {
        positions.openPositions = { ...positions.openPositions, [ticker]: openPositionData }
      } else {
        positions.closedPositions = { ...positions.closedPositions, [ticker]: {} }
      }
    }) 

  return positions
}

export default getAllPositionsByBrokerageTransactions