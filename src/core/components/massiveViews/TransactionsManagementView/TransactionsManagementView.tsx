import React, { memo } from 'react'
import { TransactionForm, TransactionShortPreview } from './components'

const TransactionsManagementView = () => {
  return (
    <div className='flex gap-[108px] h-full w-full'>
      <TransactionForm isEditMode={false}>
        <TransactionShortPreview />
      </TransactionForm>
      {/* <TransactionTable /> */}
    </div>
  )
}

export default memo(TransactionsManagementView)