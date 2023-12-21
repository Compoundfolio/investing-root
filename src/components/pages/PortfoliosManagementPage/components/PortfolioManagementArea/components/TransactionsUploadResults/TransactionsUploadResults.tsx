import { PortfolioBrokerage, RatioChart } from "@core"
import React, { memo, useState } from "react"
import { RatioChartDataSet } from "src/core/components/charts/RatioChart/types"
import { TransactionCategory } from "./types"
import { ActButtonGroup } from "./components"

interface ITransactionsUploadResults {
  selectedBrokerageOptions: PortfolioBrokerage[]
}

const TransactionsUploadResults = ({
  selectedBrokerageOptions,
}: ITransactionsUploadResults) => {
  const [hoveredTransactionCategory, setHoveredTransactionCategory] =
    useState<TransactionCategory>(null)

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
    },
  ]

  const brokeragesWithUploadedReports = selectedBrokerageOptions?.filter(
    ({ uploadedTransactionList }) => !!uploadedTransactionList.length
  )

  return (
    <aside className="flex flex-col justify-between h-full">
      <section className="flex flex-col gap-8">
        {brokeragesWithUploadedReports.map(({ title }) => {
          const brokerage = transactionsStats.find(
            ({ brokerageName }) => brokerageName === title
          )!
          return (
            <RatioChart
              key={brokerage.id}
              title={brokerage.brokerageName}
              totalShortDescription="Defined transactions"
              dataSet={brokerage.transactionsCategories}
              hoveredTransactionCategory={hoveredTransactionCategory}
              setHoveredTransactionCategory={setHoveredTransactionCategory}
            />
          )
        })}
      </section>
      <ActButtonGroup />
    </aside>
  )
}

export default memo(TransactionsUploadResults)
