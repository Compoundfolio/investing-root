import React, { memo } from "react"

const LineYieldChartTooltip = ({ slice }) => {
  return (
    <div
      style={{
        width: "max-content",
        height: "min-content",
      }}
    >
      {slice.points.map((point) => (
        <div
          key={point.id}
          style={{
            color: point.serieColor,
            padding: "3px 0",
          }}
        >
          {/* TODO: Mar 13 format */}
          {point.data.xFormatted}
        </div>
      ))}
    </div>
  )
}

export default memo(LineYieldChartTooltip)
