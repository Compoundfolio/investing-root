import { memo, useMemo } from 'react'
import VirtualizedTable from 'src/core/components/tables/Table/Table'
import { useBrokeragesData } from 'src/store'

const PortfolioAssetsList = () => {
  const { brokerageEntities } = useBrokeragesData()

  const rows = useMemo(() => {
    return brokerageEntities.length 
      ? Object
        .entries(brokerageEntities[0]?.getAssets()?.openPositions)
        .map(([ ticker, positionData ]) => ({
          index: ticker,
          ticker,
          ...positionData as any
        }))
      : []
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
      dataKey: 'currentPositionPrice',
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