import React, { memo } from "react"

const ChartTooltip = ({ slice }) => {
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
          {/* TODO: Date */}
          {point.data.xFormatted}
          <br />${point.data.yFormatted}
        </div>
      ))}
    </div>
  )
}

export default memo(ChartTooltip)
