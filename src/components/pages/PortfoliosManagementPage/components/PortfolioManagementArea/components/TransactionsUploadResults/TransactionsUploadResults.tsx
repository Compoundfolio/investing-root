import { Option, RatioChart } from '@core'
import React, { memo, useCallback, useState } from 'react'
import { RatioChartDataSet } from 'src/core/components/charts/RatioChart/types'
import { TransactionCategory } from './types'

interface ITransactionsUploadResults {
  selectedBrokerageOptions: Option[]
}

const TransactionsUploadResults = ({ 
  selectedBrokerageOptions,
}: ITransactionsUploadResults) => {

  const [ hoveredTransactionCategory, setHoveredTransactionCategory ] = useState<TransactionCategory>(null)

  const transactionsStats = [
    {
      id: "i4jnj43",
      brokerageName: "Exante",
      transactionsCategories: [
        { value: 100, name: "Buys" },
        { value: 50, name: "Sells" },
        { value: 178, name: "Dividends" },
        { value: 178, name: "Deposits" },
        { value: 2, name: "Withdrawals" },
      ] satisfies RatioChartDataSet,
    },
    {
      id: "i4jnj434",
      brokerageName: "Freedom Finance",
      transactionsCategories: [
        { value: 50, name: "Buys" },
        { value: 100, name: "Sells" },
        { value: 17, name: "Dividends" },
        { value: 1, name: "Deposits" },
        { value: 25, name: "Withdrawals" },
      ] satisfies RatioChartDataSet,
    }
  ]

  return (
    <section className='flex flex-col gap-8'>
      {transactionsStats.map(({ id, brokerageName, transactionsCategories }) => (
        <RatioChart
          key={id}
          title={brokerageName}
          totalShortDescription="Defined transactions"
          dataSet={transactionsCategories}
          hoveredTransactionCategory={hoveredTransactionCategory}
          setHoveredTransactionCategory={setHoveredTransactionCategory}
        />
      ))}
    </section>
  )
}

export default memo(TransactionsUploadResults)