import React from 'react'
import { AddIcon } from '../../icons'
import styles from './PlateAddButton.module.css'
import clsx from 'clsx';

interface IPlateAddButton {
  title: string
  isNoPortfolios: boolean
  onClick: () => void
}

// TODO: Fix multi-click
const PlateAddButton = ({
  title,
  isNoPortfolios = false,
  onClick,
}: IPlateAddButton) => {
  return (
    <div className='flex flex-col items-center gap-8 text-center'>
      {isNoPortfolios && (
        <span className={styles.plateButton_subMessageTitle}>
          No portfolios
        </span>
      )}
      <button
        onClick={onClick}
        className={clsx(styles.plateButton, isNoPortfolios && styles.plateButton__active)}
      >
        <AddIcon className={styles.plateButton__icon} />
        <span className={styles.plateButton__title}>{title}</span>
      </button>
      {isNoPortfolios && (
        <div>
          <p className={styles.plateButton_messageTitle}>
            Portfolios List Empty
          </p>
          <span className={styles.plateButton_subMessageTitle}>
            Create your first one above
          </span>
        </div>
      )}
    </div>
  )
}

export default PlateAddButton