import { memo } from 'react'
import { Asset } from 'src/core/components/blocks'
import { TWrapper, TTable, THead, TRow, TCell, TBody, ActionCell } from 'src/core/components/tables'
import { ID, PortfolioTransaction } from 'src/core/types'

interface ITransactionTable {
  selectedTransactionId?: ID
  transactionList: PortfolioTransaction[]
  onEdit: (transaction: PortfolioTransaction) => void
  onDelete: (transaction: PortfolioTransaction) => void
}

const TransactionTable = ({
  selectedTransactionId,
  transactionList,
  onEdit,
  onDelete,
}: ITransactionTable) => {  
  return (
    <TWrapper title="Assets" size={transactionList.length}>
      <TTable>
        <THead>
          <TRow>
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
            >
              <TCell>
                <Asset
                  title={transaction.title}
                  ticker={transaction.ticker}
                  exchange={transaction.exchange}
                  exchangeCountry={transaction.exchangeCountry}
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