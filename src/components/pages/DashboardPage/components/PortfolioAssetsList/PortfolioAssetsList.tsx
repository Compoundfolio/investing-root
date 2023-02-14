import { AssetOpenPosition, AssetsTable } from '@core'
import { memo, useMemo } from 'react'
import { useBrokeragesData } from 'src/store'

const PortfolioAssetsList = () => {
  const { brokerageEntities } = useBrokeragesData()

  const rows: AssetOpenPosition[] | [] = useMemo(() => {
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

  return (
    <AssetsTable 
      data={rows}
    />
  )
}

export default memo(PortfolioAssetsList)