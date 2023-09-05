"use client"

import React from 'react'
import { ActButton } from 'src/core/components/buttons'
import { ID } from 'src/core/types'

interface ICheckedTransactionsHandlingArea {
  checkedTransactionIds: ID[],
  handleMultipleTransactionsDelete: (ids: ID[]) => void
}

const CheckedTransactionsHandlingArea = ({
  checkedTransactionIds,
  handleMultipleTransactionsDelete,
}: ICheckedTransactionsHandlingArea) => {
  return (
    <section className='flex items-center gap-4 mb-8'>
      <span>{checkedTransactionIds.length} Selected</span>
      <ActButton
        color='primary'
        onClick={() => handleMultipleTransactionsDelete(checkedTransactionIds)}
      >
        Delete
      </ActButton>
    </section>
  )
}

export default CheckedTransactionsHandlingArea