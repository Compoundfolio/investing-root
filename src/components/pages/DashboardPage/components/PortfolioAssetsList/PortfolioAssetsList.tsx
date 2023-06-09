"use client"
import { AssetPosition, AssetsTable } from '@core'
import { memo, useMemo, useCallback } from 'react';
import { useBrokeragesData } from 'src/store'

const PortfolioAssetsList = () => {
  const { brokerageEntities } = useBrokeragesData()

  // TODO: Make component server-oriented and take the data from fetch call inside this component
  const rows: AssetPosition[] | [] = useMemo(() => {
    if (brokerageEntities?.length) {
      // TODO: Resolve [0].
      const assets = brokerageEntities[0]?.getAssets()
      // console.log(Object.entries(assets.openPositions).map(([ ticker, pos ]) => ({ ticker, shares: pos.sharesAmount, cur: pos.currentPositionPrice, actual: pos.actualPositionPrice, avgPrice: pos.averagePrice })));
      
      return brokerageEntities?.length 
        ? Object
          .entries(assets?.openPositions)
          .map(([ _ticker, positionData ]) => positionData)
        : []
    }

    return []
  }, [brokerageEntities])

  const handleRowHover = useCallback(() => {
    
  }, [])

  return (
    <AssetsTable 
      data={rows}
      onRowHover={handleRowHover}
    />
  )
}

export default memo(PortfolioAssetsList)