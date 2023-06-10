"use client"

import React, { useCallback, useState } from 'react'
import { LineYieldChart } from './components'

const current = 11.67

const DividendYieldChart = () => {
  const [focusValue, setFocusValue] = useState(current)

  const handleMouseFocus = useCallback(({ points }) => {
    setFocusValue(points[0].data.y)
  }, [])

  return (
    <div>
      <span className='chartStatsNumber'>{focusValue}%</span>
      <LineYieldChart handleMouseFocus={handleMouseFocus} />
    </div>
  )
}

export default DividendYieldChart