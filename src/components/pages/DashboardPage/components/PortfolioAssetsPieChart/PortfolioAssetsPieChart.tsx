import { ResponsivePie } from '@nivo/pie'
import { memo, useMemo, useState, useEffect, useLayoutEffect, useRef } from 'react';
import { StyledPieChartContainer } from './styled'
import { OpenPosition, colors, isEmpty } from '@core'
import { useBrokeragesData } from 'src/store'

type DataItem = {
  id: string;
  label: string;
  value: number;
}
type Data = DataItem[]

const getChartDataSet = (openPositions: OpenPosition): Data => {  
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
    return getChartDataSet(assets?.openPositions)
  }, [brokerageEntities])

  
  const totalAssetsSum = dataSet.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value
  }, 0)

  const handleClick = (d: any, f: any) => {
    // TODO: To uncover the asset category (if it's the category)
  }

  const handleHover = (d: any) => {    
    const hoveredEntityPiePercentage = (d.value / totalAssetsSum) * 100
    setSelectedEntityPiePercentage(hoveredEntityPiePercentage)
  }

  const [activeItem, setActiveItem] = useState<DataItem | null>(null);
  const [fillItems, setFillItems] = useState([]);

  useEffect(() => {
   if (activeItem && (activeItem as DataItem).id) {
      setFillItems(
        dataSet.map((item) => ({
          match: { id: item.id },
          id: item.id === (activeItem as DataItem).id ? "lines" : "opacity",
        }))
      );
    } else {
      setFillItems([]);
    }
  }, [activeItem]);  

  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        // @ts-ignore
        const t = ref.current.querySelectorAll("path[fill='#D9D9D9']")[0]
        t && t.dispatchEvent(new MouseEvent('mouseover', { 'view': window, 'bubbles': true, 'cancelable': true }))
        // console.log("t",t, ref.current);

      }, 1000)
    }
  }, [ref.current])

  return ( 
    <StyledPieChartContainer className='relative' ref={ref}>
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
        // onMouseMove={(e) => console.log(e)}
        onMouseLeave={(e) => console.log(e)}
        onMouseMove={(e) => console.log(e)}
        data={dataSet}
        // onClick={handleClick}
        onMouseEnter={handleHover}
        colors={CHART_COLORS_LIST}
        activeInnerRadiusOffset={5}
      //   motionConfig={{
      //     mass: 1,
      //     tension: 201,
      //     friction: 25,
      //     clamp: false,
      //     precision: 0.01,
      //     velocity: 0
      // }}
    //   legends={[
    //     {
    //         anchor: 'top-left',
    //         direction: 'column',
    //         justify: false,
    //         translateX: 0,
    //         translateY: 0,
    //         itemWidth: 100,
    //         itemHeight: 20,
    //         itemsSpacing: 8,
    //         symbolSize: 20,
    //         itemDirection: 'left-to-right',
    //         effects: [
    //           {
    //             on: "hover",
    //             style: {
    //               itemOpacity: 0.1
    //             }
    //           }
    //         ]
    //     }
    // ]}
        //@ts-ignore
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
        // fill={[
        //   {
        //     match: {
        //       id: 'ruby'
        //     },
        //     id: 'dots'
        //   },
        //   {
        //     match: {
        //       id: 'c'
        //     },
        //     id: 'dots'
        //   },
        //   {
        //     match: {
        //       id: 'go'
        //     },
        //     id: 'dots'
        //   },
        //   {
        //     match: {
        //       id: 'css'
        //     },
        //     id: 'dots'
        //   },
        //   {
        //     match: {
        //       id: 'scala'
        //     },
        //     id: 'lines'
        //   },
        //   {
        //     match: {
        //       id: 'lisp'
        //     },
        //     id: 'lines'
        //   },
        //   {
        //     match: {
        //       id: 'elixir'
        //     },
        //     id: 'lines'
        //   },
        //   {
        //     match: {
        //       id: 'javascript'
        //     },
        //     id: 'lines'
        //   }
        // ]}
      />
    </StyledPieChartContainer>
  )
}

export default memo(PortfolioAssetsPieChart)