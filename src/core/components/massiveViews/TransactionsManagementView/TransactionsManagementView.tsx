"use client"

import React, { memo } from "react"
import { TransactionForm, TransactionTable } from "./components"
import { useTransactionsHandler } from "./hooks"

const TransactionsManagementView = () => {
  const {
    transactionToEdit,
    transactionList,
    isTransactionsLoading,
    handleTransactionEdit,
    handleTransactionAdd,
    setTransactionToEdit,
    handleTransactionDelete,
    handleMultipleTransactionsDelete,
  } = useTransactionsHandler()

  return (
    <div className="flex gap-[108px] h-full w-full">
      <TransactionForm
        transactionToEdit={transactionToEdit}
        handleTransactionEdit={handleTransactionEdit}
        handleTransactionAdd={handleTransactionAdd}
      />
      <TransactionTable
        isTransactionsLoading={isTransactionsLoading}
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
