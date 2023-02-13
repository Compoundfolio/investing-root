import { isEmpty } from '@core'
import { memo, useMemo } from 'react'
import VirtualizedTable from 'src/core/components/tables/Table/Table'
import { useBrokeragesData } from 'src/store'

const PortfolioAssetsList = () => {
  const { brokerageEntities } = useBrokeragesData()

  const rows = useMemo(() => {
    if (brokerageEntities.length) {
      const assets = brokerageEntities[0].getAssets()
      return brokerageEntities.length 
        ? Object
          .entries(assets.openPositions)
          .map(([ ticker, positionData ]) => ({
            index: ticker,
            ticker,
            ...positionData
          }))
        : []
    }

    return []
  }, [brokerageEntities])
  
  const columns = [
    {
      width: 200,
      label: 'Ticker',
      dataKey: 'ticker',
    },
    {
      width: 120,
      label: 'Price\u00A0($)',
      dataKey: "actualPositionPrice",
      numeric: true,
    },
    {
      width: 120,
      label: 'Shares amount',
      dataKey: 'sharesAmount',
      numeric: true,
    }
  ]

  return (
    <div>
      <VirtualizedTable 
        columns={columns}
        rows={rows}
      />
    </div>
  )
}

export default memo(PortfolioAssetsList)