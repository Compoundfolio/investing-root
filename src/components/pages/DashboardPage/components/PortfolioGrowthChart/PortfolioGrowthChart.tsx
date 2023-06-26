"use client"

import React, { memo, useMemo } from "react"
import { ResponsiveLine } from "@nivo/line"
import { chartContainerStyled } from "./styled"
import { linearGradientDef } from "@nivo/core"
import { colors } from "@core"
import { ChartTooltip } from "./components"
import { useValueChartData } from "./hooks"

const POSITIVE_COLOR = colors.darkGreen
const NEGATIVE_COLOR = colors.pinkSoft

const properties = {
  margin: { top: 15, right: 30, bottom: 20, left: 60 },
  animate: true,
}

const PortfolioGrowthChart = ({ ...restProps }) => {
  const data = useValueChartData()

  const [oldestDateItem, earliestDateItem, minPriceValue, maxPriceValue] =
    useMemo(
      () => [
        data[0],
        data[data.length - 1],
        Math.min(...data.map((item) => item.y)),
        Math.max(...data.map((item) => item.y)),
      ],
      [data]
    )

  return (
    <section {...restProps} style={chartContainerStyled} id="valueChart">
      <ResponsiveLine
        {...properties}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        enablePoints={false}
        axisLeft={null}
        axisBottom={{
          // TODO: Format
          tickValues: [oldestDateItem.x, earliestDateItem.x],
        }}
        data={[
          {
            id: "positive :)",
            data,
          },
        ]}
        colors={[POSITIVE_COLOR, NEGATIVE_COLOR]}
        yScale={{
          type: "linear",
          stacked: false,
          min: minPriceValue,
          max: maxPriceValue,
        }}
        defs={[
          linearGradientDef("gradientA", [
            { offset: 100, color: colors.darkGreen, opacity: 0.1 },
          ]),
          linearGradientDef("gradientB", [
            { offset: 100, color: colors.pinkSoft, opacity: 0.1 },
          ]),
        ]}
        fill={[
          { match: { id: "positive :)" }, id: "gradientA" },
          { match: { id: "negative :(" }, id: "gradientB" },
        ]}
        areaOpacity={0.65}
        useMesh={true}
        crosshairType="x"
        enableSlices="x"
        sliceTooltip={ChartTooltip}
      />
    </section>
  )
}

export default memo(PortfolioGrowthChart)
