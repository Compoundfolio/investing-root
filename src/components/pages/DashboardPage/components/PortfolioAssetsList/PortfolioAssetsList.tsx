import { AssetPosition, AssetsTable } from '@core'
import { memo, useMemo, useCallback } from 'react';
import { useBrokeragesData } from 'src/store'

const PortfolioAssetsList = () => {
  const { brokerageEntities } = useBrokeragesData()

  const rows: AssetPosition[] | [] = useMemo(() => {
    if (brokerageEntities?.length) {
      // TODO: Resolve [0].
      const assets = brokerageEntities[0]?.getAssets()

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