"use client"

import React from 'react'
import { AddIcon } from '../../icons'
import styles from './PlateAddButton.module.css'

interface IPlateAddButton {
  /** @example "Add something" */
  title: string
  onClick: () => void
}

const PlateAddButton = ({
  title,
  onClick,
}: IPlateAddButton) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={styles.plateButton}
      >
        <AddIcon className={styles.plateButton__icon} />
        <span className={styles.plateButton__title}>{title}</span>
      </button>
    </div>
  )
}

export default PlateAddButton