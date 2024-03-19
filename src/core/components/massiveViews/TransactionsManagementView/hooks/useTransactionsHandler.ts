import {
  removeObjectFromArrayOfObjects,
  updateObjectFromArrayOfObjects,
} from "@core/helpers"
import { useState, useCallback } from "react"
import { ArrayElement, ID, PortfolioTransaction } from "src/core/types"
import Services from "src/services"
import { useGetAllByPortfolioId } from "src/services/user"

const { Transactions } = Services.User

type tttt = ReturnType<typeof useGetAllByPortfolioId>["data"]

const useTransactionsHandler = (selectedPortfolioId: ID) => {
  const {
    data: selectedPortfolioTransactions,
    isLoading: isTransactionsLoading,
  } = Transactions.useGetAllBy(selectedPortfolioId)
  const { mutate: createFiscalTransaction } = Transactions.fiscal.useCreate()
  const { mutate: deleteFiscalTransaction } =
    Transactions.fiscal.useDeleteById()
  const { mutate: createTradeTransaction } = Transactions.trade.useCreate()
  const { mutate: deleteTradeTransaction } = Transactions.trade.useDeleteById()

  const transactionList = selectedPortfolioTransactions?.userTransactions ?? []

  // TODO: Better type source
  type Transaction = ArrayElement<typeof transactionList>

  const [transactionToEdit, setTransactionToEdit] =
    useState<Transaction | null>(null)

  const handleTransactionAdd = useCallback(async (transaction: Transaction) => {
    if (transaction.tradeSide) {
      createTradeTransaction(transaction)
    } else {
      createFiscalTransaction(transaction)
    }

    setTransactionToEdit(null)
  }, [])

  const handleTransactionDelete = useCallback((transaction: Transaction) => {
    const deleteTrade = !!transaction.tradeSide
      ? deleteTradeTransaction
      : deleteFiscalTransaction

    deleteTrade({ id: transaction.id })
    // // Optimistically removes transactions
    // setTransactionList((prev) =>
    //   removeObjectFromArrayOfObjects(prev, transaction, "id")
    // )
  }, [])

  const handleMultipleTransactionsDelete = useCallback(
    (transactionIdsToDelete: PortfolioTransaction["id"][]) => {
      // Optimistically removes transaction
      // setTransactionList((prev) =>
      //   prev?.filter((transaction: PortfolioTransaction) => {
      //     return transactionIdsToDelete.includes(transaction.id)
      //   })
      // )
      // TODO: Server request
    },
    []
  )

  const handleTransactionEdit = (transaction: PortfolioTransaction) => {
    // Optimistically updates transaction
    setTransactionList((prev) =>
      updateObjectFromArrayOfObjects(prev, transaction, "id")
    )
    setTransactionToEdit(null)
    // TODO: Server request
  }

  return {
    transactionList,
    transactionToEdit,
    selectedPortfolioTransactions,
    isTransactionsLoading,
    handleTransactionEdit,
    handleTransactionAdd,
    setTransactionToEdit,
    handleTransactionDelete,
    handleMultipleTransactionsDelete,
  }
}

export default useTransactionsHandler
