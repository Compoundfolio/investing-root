"use client"

import { ResponsivePie } from '@nivo/pie'
import { memo, useMemo, useState, useRef } from 'react';
import styles from './PortfolioAssetsPieChart.module.css'
import { NormalizedPositions, colors } from '@core'
import { useBrokeragesData } from 'src/store'
import clsx from 'clsx';

type DataItem = {
  id: string;
  label: string;
  value: number;
}
type Data = DataItem[]

const getChartDataSet = (openPositions: NormalizedPositions): Data => {    
  return Object
    .entries(openPositions)
    .map(([ ticker, assets ]) => ({
      id: ticker,
      label: ticker,
      value: assets.actualPositionPrice,
    }))
}

const { darkLightGreen, lightGreen, darkGreen, gold, grayD9 } = colors
const CHART_COLORS_LIST = [darkLightGreen, lightGreen, darkGreen, gold, grayD9]

const PortfolioAssetsPieChart = () => {
  const [selectedEntityPiePercentage , setSelectedEntityPiePercentage] = useState(0)
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = useMemo(() => {
    const assets = brokerageEntities[0].getAssets()    
    return getChartDataSet(assets.openPositions)
  }, [brokerageEntities])

  
  const totalAssetsSum = dataSet.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value
  }, 0)

  const handleHover = (d: any) => {    
    const hoveredEntityPiePercentage = (d.value / totalAssetsSum) * 100
    setSelectedEntityPiePercentage(hoveredEntityPiePercentage)
  }

  const [activeItem, setActiveItem] = useState<DataItem | null>(null);
  const [fillItems, setFillItems] = useState([]);

  // useEffect(() => {
  //  if (activeItem && (activeItem as DataItem).id) {
  //     setFillItems(
  //       dataSet.map((item) => ({
  //         match: { id: item.id },
  //         id: item.id === (activeItem as DataItem).id ? "lines" : "opacity",
  //       }))
  //     );
  //   } else {
  //     setFillItems([]);
  //   }
  // }, [activeItem]);  

  const ref = useRef()

  return ( 
    // <section className={clsx(styles.pieChartContainer, 'relative')} ref={ref}>
    <section className={clsx(styles.pieChartContainer, 'relative')}>
      <div className='absolute flex justify-center w-full text-white top-1/2'>
        <span>{selectedEntityPiePercentage.toFixed(2)}%</span>
      </div>
      <ResponsivePie
        onClick={(item) => {                
          if ((activeItem as DataItem)?.id === item.id) {
            setActiveItem(null);
          } else {
            setActiveItem(item as DataItem);
          }
        }}
        onMouseLeave={(e) => console.log(e)}
        onMouseMove={(e) => console.log(e)}
        data={dataSet}
        onMouseEnter={handleHover}
        colors={CHART_COLORS_LIST}
        activeInnerRadiusOffset={5}
        margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={10}
        activeOuterRadiusOffset={8}
        arcLinkLabel={"f"}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
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
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={fillItems}
      />
    </section>
  )
}

export default memo(PortfolioAssetsPieChart)