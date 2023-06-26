import React, { memo } from "react"
import {
  DividendMapChart,
  DividendStatsGroup,
  DividendYieldChart,
  LineProgressChart,
} from "./components"

const DividendStatsBoard = () => {
  // TODO: Remove hard code
  const receivedDividends = 1234.34
  const expectedTotalDividends = 3411.55

  return (
    <div>
      <header>{/* Heading */}</header>
      <div className="flex justify-between gap-16">
        <section className="flex justify-between w-full gap-16">
          <div className="flex flex-col gap-16">
            <LineProgressChart
              lowerNumber={receivedDividends}
              greaterNumber={expectedTotalDividends}
            />
            <DividendYieldChart />
          </div>
          <DividendMapChart />
        </section>
        <aside>
          <DividendStatsGroup />
        </aside>
      </div>
      {/* <DivStatsBarChart openedInModal /> */}
    </div>
  )
}

export default memo(DividendStatsBoard)
