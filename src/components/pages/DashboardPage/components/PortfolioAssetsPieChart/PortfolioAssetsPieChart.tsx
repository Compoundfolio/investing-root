import { ResponsivePie } from '@nivo/pie'
import { memo, useState } from 'react'
import { StyledPieChartContainer } from './styled'
import { Ticker, colors } from '@core'
let positions = {
  openPositions: {} as { [K: Ticker]:  {
    sharesAmount: number;
    currentPositionPrice: number;
  }},
  closedPositions: {},
}

const o = {
  openPositions: {
    "ALLY": { currentPositionPrice: 200 },
    "TROW": { currentPositionPrice: 100 },
    "BBY": { currentPositionPrice: 330 },
    "BST": { currentPositionPrice: 20 },
    "SCHD": { currentPositionPrice: 709 },
    "ABBV": { currentPositionPrice: 301 },
  }
}

const f = (positionS: typeof o = o): typeof data => {
  return Object
    .entries(positionS.openPositions)
    .map(([ ticker, { currentPositionPrice } ]) => ({
      id: ticker,
      label: ticker,
      value: currentPositionPrice,
    }))
}

const data = [
  {
    "id": "css",
    "label": "css",
    "value": 445,
    // "color": "hsl(258, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 584,
    // "color": "hsl(31, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 135,
    // "color": "hsl(49, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 213,
    // "color": "hsl(296, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 558,
    // "color": "hsl(147, 70%, 50%)"
  }
]

const { darkLightGreen, lightGreen, darkGreen, gold, grayD9 } = colors
const CHART_COLORS_LIST = [darkLightGreen, lightGreen, darkGreen, gold, grayD9]

const PortfolioAssetsPieChart = () => {
  const [selectedEntityPiePercentage , setSelectedEntityPiePercentage] = useState(0)

  const dataSet = f()
  const totalAssetsSum = dataSet.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value
  }, 0)

  const handleClick = (d: any, f: any) => {
    console.log(d, f);
  }

  const handleHover = (d: any) => {
    const hoveredEntityPiePercentage = (d.value / totalAssetsSum) * 100
    setSelectedEntityPiePercentage(hoveredEntityPiePercentage)
  }

  return (
    <StyledPieChartContainer className='relative'>
      <div className='absolute flex justify-center w-full text-white top-1/2'>
        <span>{Math.round(selectedEntityPiePercentage)}%</span>
      </div>
      <ResponsivePie
        data={f()}
        onClick={handleClick}
        onMouseEnter={handleHover}
        colors={CHART_COLORS_LIST}
        activeInnerRadiusOffset={5}
        motionConfig={{
          mass: 1,
          tension: 201,
          friction: 25,
          clamp: false,
          precision: 0.01,
          velocity: 0
      }}
      legends={[
        {
            anchor: 'top-left',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 8,
            symbolSize: 20,
            itemDirection: 'left-to-right'
        }
    ]}
        //@ts-ignore
        margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
        innerRadius={0.5}
        padAngle={3}
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
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
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