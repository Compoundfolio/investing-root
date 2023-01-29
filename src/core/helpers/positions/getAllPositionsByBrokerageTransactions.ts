import { BrokerageTransactionType, NormalizedTransactionsByTicker, OrderOperation, Transaction } from 'src/core/types';
import { parseNumber } from '../formaters';

const getCurrentPositionPrice = (transactionsList: Transaction[], sharesAmount: number) => {
  return transactionsList.reduce((
    prevValue: number, 
    currentTransaction: Transaction
  ) => {
    const isTrade = currentTransaction.type === BrokerageTransactionType.TRADE

    if (isTrade && currentTransaction.operation === OrderOperation.BUY) {
      return prevValue + (((parseNumber(currentTransaction.orderPrice) ?? 0) * Number(currentTransaction.orderAmount)) ?? 0)
    } 
    
    // if (isTrade && currentTransaction.operation === OrderOperation.SELL) {
    //   return prevValue - (((parseNumber(currentTransaction.orderPrice) ?? 0) * sharesAmount) ?? 0)
    // }

    return 0
  }, 0)
}

const getSharesAmount = (transactionsList: Transaction[]) => transactionsList.reduce((
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

// TODO: Pass smw else + rename
type Tt = {
  sharesAmount: number;
  currentPositionPrice: number;
}

const getAllPositionsByBrokerageTransactions = (
  transactionsByTicker: NormalizedTransactionsByTicker
) => {    
  let positions = {
    openPositions: {} as Tt,
    closedPositions: {},
  }
console.log("transactionsByTicker",transactionsByTicker);

  Object
    .entries(transactionsByTicker)
    .forEach(([ ticker, transactionsList ]) => { 
      const sharesAmount = getSharesAmount(transactionsList)
      const openPositionData = {
        sharesAmount,
        currentPositionPrice: getCurrentPositionPrice(transactionsList, sharesAmount)
      }

      if (openPositionData.sharesAmount > 0) {
        positions.openPositions = { ...positions.openPositions, [ticker]: openPositionData }
      } else {
        positions.closedPositions = { ...positions.closedPositions, [ticker]: {} }
      }
    }) 

  return positions
}

export default getAllPositionsByBrokerageTransactions