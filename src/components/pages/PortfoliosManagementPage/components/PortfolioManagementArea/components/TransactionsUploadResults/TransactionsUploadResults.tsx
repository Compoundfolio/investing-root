import { RatioChart } from '@core'
import React from 'react'
import { RatioChartDataSet } from 'src/core/components/charts/RatioChart/types'

const TransactionsUploadResults = ({ 

}) => {

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
        />
      ))}
    </section>
  )
}

export default TransactionsUploadResults