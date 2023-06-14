import { NumbersPlate } from '@core'
import React from 'react'

/** Contains `plates` components with div stats */
const DividendStatsGroup = () => {
  return (
    <div className='flex flex-col gap-2.5 w-min'>
      <div className='flex gap-2.5'>
        <NumbersPlate
          type="percentage"
          value="12.95"
          description="Dividend Yield"
          extraNumbersGroup={[{ name: "YoC", number: "14.77%" }]}
        />
        <NumbersPlate
          type="percentage"
          value="12.95"
          description="Dividend Growth"
          bgColor="rgba(15, 111, 114, 0.1)"
          extraNumbersGroup={[{ name: "Prev", number: "14.77%" }]}
        />
      </div>
      <NumbersPlate
        wFull
        type="money"
        value="2933456.19"
        description="Annual dividend income"
        bgColor="rgba(0, 0, 0, 0.33)"
        extraNumbersGroup={[
          { name: "Quarterly", number: "$9999.99" },
          { name: "Monthly", number: "$2999.99" },
        ]}
      />
    </div>
  )
}

export default DividendStatsGroup