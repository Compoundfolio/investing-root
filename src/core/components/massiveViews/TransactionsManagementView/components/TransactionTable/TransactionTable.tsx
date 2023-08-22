import { memo } from 'react'
import { Asset } from 'src/core/components/blocks'
import { TWrapper, TTable, THead, TRow, TCell, TBody, ActionCell } from 'src/core/components/tables'
import { colors } from 'src/core/theme'
import { PortfolioTransaction } from 'src/core/types'

interface ITransactionTable {
  transactionList: PortfolioTransaction[]
  onEdit: (transaction: PortfolioTransaction) => void
  onDelete: (transaction: PortfolioTransaction) => void
}

const TransactionTable = ({
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
          {transactionList?.length ? transactionList.map((transaction) => (
            <TRow key={transaction.id}>
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
          )) : (
            <span
              className='flex items-center justify-center p-20 mt-6 text-gray-400'
              style={{
                borderTop: `1px ${colors.gray4C} solid`,
                borderBottom: `1px ${colors.gray4C} solid`,
              }}
            >
              List is empty 🤔
            </span>
          )}
        </TBody>
      </TTable>
    </TWrapper>
  )
}

export default memo(TransactionTable)