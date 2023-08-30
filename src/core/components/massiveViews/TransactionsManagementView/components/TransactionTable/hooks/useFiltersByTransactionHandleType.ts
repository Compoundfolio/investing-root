import { useMemo } from "react"
import { PortfolioTransaction, TransactionHandlingType } from "src/core/types"
import { normalizeArrayOfObjectsBy } from '@core';

interface IUseFiltersByTransactionHandleType {
  transactionList: PortfolioTransaction[]
}

const useFiltersByTransactionHandleType = ({
  transactionList,
}: IUseFiltersByTransactionHandleType) => {
  const {
    transactionsByHandlingType,
    uploadedTransactions,
    handlyAddedTransactions,
    editedTransactionsTransactions,
    deletedTransactions,
  } = useMemo(() => {
    const transactionsByHandlingType = normalizeArrayOfObjectsBy(
      transactionList,
      "handlingType"
    ) as {[K in TransactionHandlingType]?: PortfolioTransaction[]}

    return {
      transactionsByHandlingType,
      uploadedTransactions: transactionsByHandlingType?.UPLOADED ?? [],
      handlyAddedTransactions: transactionsByHandlingType?.HANDLY_ADDED ?? [],
      editedTransactionsTransactions: transactionsByHandlingType?.HANDLY_EDITED ?? [],
      deletedTransactions: transactionsByHandlingType?.DELETED ?? [],
    }
  }, [transactionList.length])

  const filterTransactions = (transactionHandlingType: TransactionHandlingType) => () => {
    return transactionsByHandlingType[transactionHandlingType]
  }

  return {
    allTransactionsAmount: transactionList.length,
    uploadedTransactionsAmount: uploadedTransactions.length,
    handlyAddedTransactionsAmount: handlyAddedTransactions.length,
    editedTransactionsAmount: editedTransactionsTransactions.length,
    deletedTransactionsAmount: deletedTransactions.length,
    filterTransactions,
  }
}

export default useFiltersByTransactionHandleType