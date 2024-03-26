"use client"

import { memo } from "react"
import { Asset } from "src/core/components/blocks"
import {
  TWrapper,
  TTable,
  THead,
  TRow,
  TCell,
  TBody,
  ActionCell,
} from "src/core/components/tables"
import { TabGroup } from "src/core/components/tabulation"
import { ID, PortfolioTransactionV2 } from "src/core/types"
import {
  useCheckTableRows,
  useTabFilters,
  useFiltersByTransactionHandleType,
} from "./hooks"
import { CheckedTransactionsHandlingArea } from "./components"
import { DateRangePicker, useDateRangePickerState } from "src/core/client"

interface ITransactionTable {
  selectedTransactionId?: ID
  transactionList: PortfolioTransactionV2[]
  isTransactionsLoading: boolean
  onEdit: (transaction: PortfolioTransactionV2) => void
  onDelete: (transaction: PortfolioTransactionV2) => void
  handleMultipleTransactionsDelete: (
    ids: PortfolioTransactionV2["id"][]
  ) => void
}

const TransactionTable = ({
  selectedTransactionId,
  transactionList,
  isTransactionsLoading,
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

  const { dateRangeValue, handleDateRangeChange } = useDateRangePickerState()

  return (
    <TWrapper title="Transactions" size={transactionList.length}>
      <TabGroup tabs={tabs} />
      <section className="flex items-center justify-between">
        <div>
          {!!checkedTransactionIds.length && (
            <>
              <CheckedTransactionsHandlingArea
                checkedTransactionIds={checkedTransactionIds}
                handleMultipleTransactionsDelete={
                  handleMultipleTransactionsDelete
                }
              />
            </>
          )}
        </div>
        <div>
          <DateRangePicker
            name="dateRangeFilter"
            value={dateRangeValue}
            onChange={handleDateRangeChange}
          />
          {/* AssetSearch */}
        </div>
      </section>
      <TTable>
        <THead>
          <TRow isChecked={isAllSelected} onCheck={checkAll}>
            <TCell th>Asset</TCell>
            <TCell th>Brokerage</TCell>
            <TCell th>Type</TCell>
            <TCell th>Details</TCell>
            <TCell th>Total</TCell>
            <TCell th>Unit Price</TCell>
            <TCell th>Units</TCell>
            <TCell th>Date</TCell>
            <TCell th>Actions</TCell>
          </TRow>
        </THead>
        <TBody isLoading={isTransactionsLoading}>
          {transactionList?.map((transaction) => (
            // TODO: Separate memo component
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
                  assetLogo={transaction?.icon}
                />
              </TCell>
              <TCell>{transaction.assignedBrokerage?.icon?.(16, true)}</TCell>
              <TCell>{transaction.transactionType.label}</TCell>
              {/* TODO: Create component according Figma */}
              <TCell>{transaction.operationType}</TCell>
              <TCell number bold>
                ${transaction.total}
              </TCell>
              <TCell number>${transaction.price}</TCell>
              <TCell number>{transaction.amount}</TCell>
              <TCell>{transaction.date}</TCell>
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
