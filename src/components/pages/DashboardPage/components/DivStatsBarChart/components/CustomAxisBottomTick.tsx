import { useTheme } from '@nivo/core'
import React, { memo, useMemo } from 'react'
import { AxisTickProps } from '@nivo/axes'
import { colors, getMonthShortNameFromDate } from '@core'

const CustomAxisBottomTick = (tick: AxisTickProps<string>) => {
  const theme = useTheme()

  const currentShortMonthName = useMemo(() => {
    const date = new Date()
    return getMonthShortNameFromDate(date)
  }, [])

  const extra = currentShortMonthName === tick.value ? { "data-currentShortMonthName": true } : {}

  return (
    <g transform={`translate(${tick.x},${tick.y + 22})`}>
      <text
        {...extra}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          ...theme.axis.ticks.text,
        }}
      >
        {tick.value}
      </text>
    </g>
  )
}

export default memo(CustomAxisBottomTick)