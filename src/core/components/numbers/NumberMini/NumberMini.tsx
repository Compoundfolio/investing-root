import React, { memo } from 'react'
import { INumberMini } from './types'
import styles from './NumberMini.module.css'

const NumberMini = ({
  title,
  numbers,
  sub,
}: INumberMini) => {
  return (
    <div className={styles.numberContainer}>
      <h6 className={styles.numberContainer_title}>
        {title}
      </h6>
      <span className={styles.numberContainer_value}>
        {numbers}
      </span>
      {sub && (
        <span className={styles.numberContainer_subTitle}>
          {sub}
        </span>
      )}
    </div>
  )
}

export default memo(NumberMini)