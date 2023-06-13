import { NumbersPlate } from '@core'
import React from 'react'

/** Contains `plates` components with div stats */
const DividendStatsGroup = () => {
  return (
    <div className='flex flex-col gap-2.5'>
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
          description="Dividend Yield"
          bgColor="rgba(15, 111, 114, 0.1)"
          extraNumbersGroup={[{ name: "Prev", number: "14.77%" }]}
        />
      </div>
      <NumbersPlate
        type="percentage"
        value="12.95"
        description="Dividend Yield"
        bgColor="rgba(0, 0, 0, 0.33)"
        extraNumbersGroup={[
          { name: "Quarterly", number: "$999.99" },
          { name: "Monthly", number: "$299.99" },
        ]}
      />
    </div>
  )
}

export default DividendStatsGroup