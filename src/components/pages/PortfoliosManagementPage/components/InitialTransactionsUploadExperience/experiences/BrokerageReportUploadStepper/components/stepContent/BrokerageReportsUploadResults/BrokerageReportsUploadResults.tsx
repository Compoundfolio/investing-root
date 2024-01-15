import React, { useState } from "react"
import { TransactionCategory, TransactionsStats } from "./types"
import { Option, RatioChart } from "@core"

interface IBrokerageReportsUploadResults {
  selectedBrokerages: Option[]
}

const BrokerageReportsUploadResults = ({
  selectedBrokerages,
}: IBrokerageReportsUploadResults) => {
  const [hoveredTransactionCategory, setHoveredTransactionCategory] =
    useState<TransactionCategory>(null)

  const transactionsStats: TransactionsStats = {
    Exante: {
      id: "i4jnj43",
      brokerageName: "Exante",
      transactionsCategories: [
        { value: 100, name: "Buys" },
        { value: 50, name: "Sells" },
        { value: 178, name: "Dividends" },
        { value: 178, name: "Deposits" },
        { value: 2, name: "Withdrawals" },
      ],
    },
    "Freedom Finance": {
      id: "i4jnj434",
      brokerageName: "Freedom Finance",
      transactionsCategories: [
        { value: 50, name: "Buys" },
        { value: 100, name: "Sells" },
        { value: 17, name: "Dividends" },
        { value: 1, name: "Deposits" },
        { value: 25, name: "Withdrawals" },
      ],
    },
  }

  return (
    <aside className="flex flex-col justify-between h-full">
      <section className="flex flex-col gap-8">
        {selectedBrokerages.map((brokerage: Option) => (
          <RatioChart
            key={brokerage.id}
            title={brokerage.label}
            totalShortDescription="Defined transactions"
            dataSet={transactionsStats[brokerage.value].transactionsCategories}
            hoveredTransactionCategory={hoveredTransactionCategory}
            setHoveredTransactionCategory={setHoveredTransactionCategory}
          />
        ))}
      </section>
    </aside>
  )
}

export default BrokerageReportsUploadResults
