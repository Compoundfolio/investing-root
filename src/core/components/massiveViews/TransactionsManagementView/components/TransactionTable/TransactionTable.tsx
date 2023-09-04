"use client"

import { memo } from 'react'
import { Asset } from 'src/core/components/blocks'
import { TWrapper, TTable, THead, TRow, TCell, TBody, ActionCell } from 'src/core/components/tables'
import { TabGroup } from 'src/core/components/tabulation'
import { ID, PortfolioTransaction } from 'src/core/types'
import { useCheckTableRows, useTabFilters, useFiltersByTransactionHandleType } from './hooks'
import { CheckedTransactionsHandlingArea } from './components'

interface ITransactionTable {
  selectedTransactionId?: ID
  transactionList: PortfolioTransaction[]
  onEdit: (transaction: PortfolioTransaction) => void
  onDelete: (transaction: PortfolioTransaction) => void
  handleMultipleTransactionsDelete: (ids: PortfolioTransaction['id'][]) => void
}

const TransactionTable = ({
  selectedTransactionId,
  transactionList,
  onEdit,
  onDelete,
  handleMultipleTransactionsDelete,
}: ITransactionTable) => {

  const {
    isAllSelected,
    checkedTransactionIds,
    checkAll,
    checkOneTransaction,
  } = useCheckTableRows({ transactionList })

  const {
    allTransactionsAmount,
    uploadedTransactionsAmount,
    handlyAddedTransactionsAmount,
    editedTransactionsAmount,
    deletedTransactionsAmount,
    filterTransactions,
  } = useFiltersByTransactionHandleType({ transactionList })

  const tabs = useTabFilters({
    allTransactionsAmount,
    uploadedTransactionsAmount,
    handlyAddedTransactionsAmount,
    editedTransactionsAmount,
    deletedTransactionsAmount,
    filterTransactions,
  })

  return (
    <TWrapper title="Transactions" size={transactionList.length}>
      <TabGroup tabs={tabs} />
      <section className='flex items-center justify-between'>
        <div>
          {!!checkedTransactionIds.length && <>
            <CheckedTransactionsHandlingArea
              checkedTransactionIds={checkedTransactionIds}
              handleMultipleTransactionsDelete={handleMultipleTransactionsDelete}
            />
          </>}
        </div>
        <div>
          {/* Date range filter */}
          {/* AssetSearch */}
        </div>
      </section>
      <TTable>
        <THead>
          <TRow
            isChecked={isAllSelected}
            onCheck={checkAll}
          >
            <TCell th>Asset</TCell>
            <TCell th>Operation Type</TCell>
            <TCell th>Asset Type</TCell>
            <TCell th>Date</TCell>
            <TCell th>Price</TCell>
            <TCell th>Amount</TCell>
            <TCell th>Fees</TCell>
            <TCell th>Total</TCell>
            <TCell th>Actions</TCell>
          </TRow>
        </THead>
        <TBody>
          {transactionList?.map((transaction) => (
            <TRow
              key={transaction.id}
              isSelected={transaction.id == selectedTransactionId}
              isChecked={checkedTransactionIds.includes(transaction.id)}
              onCheck={checkOneTransaction(transaction.id)}
            >
              <TCell>
                <Asset
                  title={transaction.title}
                  ticker={transaction.ticker}
                  exchange={transaction.exchange}
                  exchangeCountry={transaction.exchangeCountry}
                  handlingType={transaction.handlingType}
                />
              </TCell>
              <TCell>{transaction.operationType}</TCell>
              <TCell>{transaction.assetType.label}</TCell>
              <TCell>{transaction.date}</TCell>
              <TCell number>${transaction.price}</TCell>
              <TCell number>{transaction.amount}</TCell>
              <TCell number>${transaction.fee}</TCell>
              <TCell number bold>${transaction.total}</TCell>
              <ActionCell
                tableItem={transaction}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </TRow>
          ))}
        </TBody>
      </TTable>
    </TWrapper>
  )
}

export default memo(TransactionTable)