import { DataVisHeading, calcPercentageChange } from "@core"
import React from "react"
import ProgressLegendItem from "./components/ProgressLegendItem"

interface ILineProgressChart {
  lowerNumber: number
  greaterNumber: number
}

const LineProgressChart = ({
  lowerNumber,
  greaterNumber,
}: ILineProgressChart) => {
  // TODO: Add local env check
  if (lowerNumber > greaterNumber) throw new Error("")

  const percentageDifference = calcPercentageChange(
    lowerNumber,
    greaterNumber,
    true
  )
  const restPercentageDifference = 100 - percentageDifference
  const progressSizeStyle = { width: `${percentageDifference}%` }

  return (
    <DataVisHeading title="Pay-out Percentage" dataVisDescription="TODO">
      <section style={{ width: 491 }}>
        <div className="flex items-center justify-between gap-4">
          <span className="chartStatsNumber">${lowerNumber}</span>
          <span className="chartStatsNumberFaded">${greaterNumber}</span>
        </div>
        <div className="progressLineChartBase">
          <div className="progressLineChartProg" style={progressSizeStyle} />
        </div>
        <legend className="flex gap-16 mt-5">
          <ProgressLegendItem name="Payed" percentage={percentageDifference} />
          <ProgressLegendItem
            name="Expected"
            percentage={restPercentageDifference}
            isFaded
          />
        </legend>
      </section>
    </DataVisHeading>
  )
}

export default LineProgressChart
