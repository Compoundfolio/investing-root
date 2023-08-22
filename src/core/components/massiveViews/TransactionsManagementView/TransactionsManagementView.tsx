"use client"

import React, { memo, useState, useCallback } from 'react'
import { TransactionForm, TransactionTable } from './components'
import { removeObjectFromArrayOfObjects, updateObjectFromArrayOfObjects } from '@core/helpers'
import { PortfolioTransaction } from 'src/core/types'

const TransactionsManagementView = () => {
  const [ transactionList, setTransactionList ] = useState<PortfolioTransaction[] | []>([])
  const [ transactionToEdit, setTransactionToEdit ] = useState<PortfolioTransaction | null>(null)

  const handleTransactionDelete = useCallback((transaction: PortfolioTransaction) => {
    // Optimistically remove transaction
    setTransactionList(prev => removeObjectFromArrayOfObjects(prev, transaction, "id"))
    // TODO: Server request
  }, [])

  const handleTransactionEdit = (transaction: PortfolioTransaction) => {
    // Optimistically update transaction
    setTransactionList(prev => updateObjectFromArrayOfObjects(prev, transaction, "id"))
    setTransactionToEdit(null)
    // TODO: Server request
  }

  const handleTransactionAdd = (transaction: PortfolioTransaction) => {
    // Optimistically add transaction
    setTransactionList(prev => ([ transaction, ...prev ]))
    setTransactionToEdit(null)
    // TODO: Server request
  }

  return (
    <div className='flex gap-[108px] h-full w-full'>
      <TransactionForm
        transactionToEdit={transactionToEdit}
        handleTransactionEdit={handleTransactionEdit}
        handleTransactionAdd={handleTransactionAdd}
      />
      <TransactionTable
        transactionList={transactionList}
        onEdit={setTransactionToEdit}
        onDelete={handleTransactionDelete}
      />
    </div>
  )
}

export default memo(TransactionsManagementView)