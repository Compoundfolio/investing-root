"use client"

import React, { memo } from "react"
import { TransactionForm, TransactionTable } from "./components"
import { useTransactionsHandler } from "./hooks"
import { usePortfolioManagerContext } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"

const TransactionsManagementView = () => {
  const { selectedPortfolioCard } = usePortfolioManagerContext()
  const {
    transactionToEdit,
    transactionList,
    isTransactionsLoading,
    handleTransactionEdit,
    handleTransactionAdd,
    setTransactionToEdit,
    handleTransactionDelete,
    handleMultipleTransactionsDelete,
  } = useTransactionsHandler(selectedPortfolioCard?.id!)

  return (
    <div className="flex gap-[108px] h-full w-full">
      <TransactionForm
        transactionToEdit={transactionToEdit}
        handleTransactionEdit={handleTransactionEdit}
        handleTransactionAdd={handleTransactionAdd}
      />
      <TransactionTable
        selectedTransactionId={transactionToEdit?.id}
        transactionList={transactionList}
        onEdit={setTransactionToEdit}
        onDelete={handleTransactionDelete}
        handleMultipleTransactionsDelete={handleMultipleTransactionsDelete}
      />
    </div>
  )
}

export default memo(TransactionsManagementView)
