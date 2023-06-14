"use client"

import React, { useCallback, useState } from 'react'
import { LineYieldChart } from './components'
import { DataVisHeading } from '@core'

const current = 11.67

const DividendYieldChart = () => {
  const [focusValue, setFocusValue] = useState(current)

  const handleMouseFocus = useCallback(({ points }) => {
    setFocusValue(points[0].data.y)
  }, [])

  return (
    <DataVisHeading 
      title='Dividend Yield'
      dataVisDescription='Dividend Yield Chart ...'
    >
      <span className='mb-0 chartStatsNumber'>{focusValue}%</span>
      <LineYieldChart handleMouseFocus={handleMouseFocus} />
    </DataVisHeading>
  )
}

export default DividendYieldChart