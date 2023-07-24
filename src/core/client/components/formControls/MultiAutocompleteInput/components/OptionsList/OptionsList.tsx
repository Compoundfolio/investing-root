import React, { memo } from 'react'
import styles from './OptionsList.module.css'
import clsx from 'clsx';

const OptionsList = ({
  options,
  isSelected = false,
  selectOptionByValue,
}) => {
  return (
    <ul className={styles.optionsList}>
      {options.map(({ id, value, label }) => {
        <li
          key={id}
        >
          <button
            className={clsx(styles.optionsList, isSelected && styles.optionsList__item_active)}
            onClick={() => selectOptionByValue(value)}
          >
            {label}
          </button>
        </li>
      })}
    </ul>
  )
}

export default memo(OptionsList)