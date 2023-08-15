import React from 'react'
import { Divider } from 'src/core/components/blocks'
import styles from './AssetOperationSummary.module.css'

interface IAssetOperationSummary {
  availableBuyingPower: number
  transactionTotal: number
  availableBuyingPowerLeft: number
}

const AssetOperationSummary = ({
  availableBuyingPower,
  transactionTotal,
  availableBuyingPowerLeft,
}: IAssetOperationSummary) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>Available cash:</span>
        <span className={styles.summary_item__value}>${availableBuyingPower}</span>
      </p>
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>Transaction total:</span>
        <span className={styles.summary_item__value}>${transactionTotal}</span>
      </p>
      <Divider />
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>Available cash left:</span>
        <span className={styles.summary_item__value}>${availableBuyingPowerLeft}</span>
      </p>
    </div>
  )
}

export default AssetOperationSummary