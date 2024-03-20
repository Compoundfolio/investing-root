import {
  removeObjectFromArrayOfObjects,
  updateObjectFromArrayOfObjects,
} from "@core/helpers"
import { useState, useCallback } from "react"
import { usePortfolioManagerContext } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { PortfolioTransactionV2, UUID } from "src/core/types"
import Services from "src/services"

const { Transactions } = Services.User

const useTransactionsHandler = () => {
  const { selectedPortfolioCard } = usePortfolioManagerContext()

  // Queries
  const {
    data: selectedPortfolioTransactions,
    isLoading: isTransactionsLoading,
  } = Transactions.useGetAllBy(selectedPortfolioCard?.id!)

  // Mutations
  const { mutate: createFiscalTransaction } = Transactions.fiscal.useCreate()
  const { mutate: deleteFiscalTransaction } =
    Transactions.fiscal.useDeleteById()
  const { mutate: createTradeTransaction } = Transactions.trade.useCreate()
  const { mutate: deleteTradeTransaction } = Transactions.trade.useDeleteById()

  const transactionList = selectedPortfolioTransactions?.userTransactions ?? []

  const [transactionToEdit, setTransactionToEdit] =
    useState<PortfolioTransactionV2 | null>(null)

  const handleTransactionAdd = useCallback(
    async (transaction: PortfolioTransactionV2) => {
      if (transaction.tradeSide) {
        createTradeTransaction(transaction)
      } else {
        createFiscalTransaction(transaction)
      }

      setTransactionToEdit(null)
    },
    []
  )

  const handleTransactionDelete = useCallback(
    (transaction: PortfolioTransactionV2) => {
      const deleteTrade = !!transaction.tradeSide
        ? deleteTradeTransaction
        : deleteFiscalTransaction

      deleteTrade({ id: transaction.id })
      // // Optimistically removes transactions
      // setTransactionList((prev) =>
      //   removeObjectFromArrayOfObjects(prev, transaction, "id")
      // )
    },
    []
  )

  const handleMultipleTransactionsDelete = useCallback(
    (transactionIdsToDelete: UUID) => {
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

  const handleTransactionEdit = useCallback(
    (transaction: PortfolioTransactionV2) => {
      // Optimistically updates transaction
      // setTransactionList((prev) =>
      //   updateObjectFromArrayOfObjects(prev, transaction, "id")
      // )
      setTransactionToEdit(null)
      // TODO: Server request
    },
    []
  )

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
