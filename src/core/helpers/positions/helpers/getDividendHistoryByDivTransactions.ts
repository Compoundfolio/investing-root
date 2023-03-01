import { BrokerageTransactionType, DividendHistory } from 'src/core/types';
import Transaction from '../../../types/brokerage/Transaction';

/** Returns dividend history according asset transactions */
const getDividendHistoryByDivTransactions = (transactionsList: Transaction[]): DividendHistory => {
  let divHistory = [] as DividendHistory

  transactionsList.forEach(currentTransaction => {
    const isDividend = currentTransaction.type === BrokerageTransactionType.DIVIDEND
    if (isDividend) {
      divHistory.push({
        payDate: currentTransaction.time,
        dividendAmount: currentTransaction.orderPrice,
      })
    } 
  })

  return divHistory
}

export default getDividendHistoryByDivTransactions