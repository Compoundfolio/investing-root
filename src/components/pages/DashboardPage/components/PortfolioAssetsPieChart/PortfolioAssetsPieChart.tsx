"use client"

// TODO: Finish Refactor

import { ResponsivePie } from "@nivo/pie"
import { memo, useMemo, useState, useRef, useEffect } from "react"
import styles from "./PortfolioAssetsPieChart.module.css"
import { NormalizedPositions, colors, parseNumberToFixed2 } from "@core"
import { useBrokeragesData } from "src/store"
import { ChartTypeSwitcher } from "./components"
import clsx from "clsx"
import { Data, DataItem, PieItem } from "./types"

const HARD_CODED_DATA: DataItem[] = [
  { id: "k34", label: "TSCO", value: 140 },
  { id: "k34234", label: "SCO", value: 170 },
  { id: "k3dfsg4", label: "TSC", value: 140 },
  { id: "k3dfgx4", label: "TSO", value: 140 },
  { id: "k3zzc4", label: "TCO", value: 240 },
  { id: "k3x4", label: "TS", value: 40 },
  { id: "k3wf4", label: "T", value: 140 },
  { id: "k3ww4", label: "CO", value: 40 },
  { id: "k3w4", label: "F", value: 70 },
  { id: "k34www", label: "AD", value: 340 },
]

const { darkLightGreen, lightGreen, darkGreen, gold, grayD9 } = colors
const CHART_COLORS_LIST = [darkLightGreen, lightGreen, darkGreen, gold, grayD9]

const PortfolioAssetsPieChart = () => {
  const [selectedPieEntity, setSelectedPieEntityPiePercentage] =
    useState<PieItem | null>(null)
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = HARD_CODED_DATA

  // const dataSet = useMemo(() => {
  //   const assets = brokerageEntities[0]?.getAssets()
  //   return getChartDataSet(assets?.openPositions)
  // }, [brokerageEntities])

  const totalAssetsSum = dataSet?.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value
  }, 0)

  const handleHover = (item: PieItem) => {
    const hoveredEntityPiePercentage = parseNumberToFixed2(
      (item.value / totalAssetsSum) * 100
    )!

    setSelectedPieEntityPiePercentage({
      ...item,
      value: parseNumberToFixed2(item.value)!,
      percentage: hoveredEntityPiePercentage,
    })
  }

  const [activeItem, setActiveItem] = useState<PieItem | null>(null)
  const [fillItems, setFillItems] = useState<PieItem[]>([])

  useEffect(() => {
    if (activeItem && (activeItem as PieItem).id) {
      setFillItems(
        // @ts-ignore
        dataSet.map((item) => ({
          match: { id: item.id },
          id: item.id === (activeItem as PieItem).id ? "lines" : "opacity",
        }))
      )
    } else {
      setFillItems([])
    }
  }, [activeItem])

  const ref = useRef()

  return (
    // <section className={clsx(styles.pieChartContainer, 'relative')} ref={ref}>
    <section className="relative">
      {selectedPieEntity?.value && (
        <div
          className={clsx([
            "absolute flex flex-col items-center justify-center w-full text-white gap-0.5",
            styles.pieChart,
          ])}
        >
          <span className={styles.pieChart__focusedItem_label}>
            ${selectedPieEntity.value}
          </span>
          <span className={styles.pieChart__focusedItem_percentage}>
            {selectedPieEntity?.percentage}%
          </span>
          <span className={styles.pieChart__focusedItem_label}>
            [ {selectedPieEntity.label} ]
          </span>
        </div>
      )}
      <ChartTypeSwitcher />
      <div className={styles.pieChartContainer}>
        <ResponsivePie
          onClick={(item) => {
            if ((activeItem as PieItem)?.id === item.id) {
              setActiveItem(null)
            } else {
              // @ts-ignore
              setActiveItem(item as PieItem)
            }
          }}
          // onMouseLeave={(e) => console.log(e)}
          // onMouseMove={(e) => console.log(e)}
          data={dataSet}
          // @ts-ignore
          onMouseEnter={handleHover}
          colors={CHART_COLORS_LIST}
          activeInnerRadiusOffset={5}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={10}
          activeOuterRadiusOffset={8}
          arcLinkLabel={"f"}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={0}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "opacity",
              type: "patternDots",
              background: "#a1a1a1",
              color: "rgba(255, 255, 255, 0.3)",
              size: 3,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          // @ts-ignore
          fill={fillItems}
        />
      </div>
    </section>
  )
}

export default memo(PortfolioAssetsPieChart)
