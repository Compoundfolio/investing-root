import { memo } from 'react'
import { AssetSearchOptionData } from '../hooks'
import { Asset } from 'src/core/components/blocks';
import styles from "./SearchAssetOption.module.css"

interface ISearchAssetOption {
  asset: AssetSearchOptionData | undefined
}

const SearchAssetOption = ({ asset }: ISearchAssetOption) => {
  return (
    <div className='flex items-center justify-between w-full gap-4'>
      <Asset
        title={asset?.title}
        ticker={asset?.ticker}
        exchange={asset?.exchange}
        exchangeCountry={asset?.exchangeCountry}
      />
      <div className='flex items-center gap-4'>
        <span className={styles.assetOption_type}>{asset?.type}</span>
        <span className={styles.assetOption_currentMarketCost}>${asset?.currentMarketPrice}</span>
      </div>
    </div>
  )
}

export default memo(SearchAssetOption)