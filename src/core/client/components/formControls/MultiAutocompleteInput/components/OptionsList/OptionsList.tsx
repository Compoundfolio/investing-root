import React, { memo, useMemo } from 'react'
import styles from './OptionsList.module.css'
import clsx from 'clsx';
import { Option } from 'src/core/types';

interface IOptionsList {
  options: Option[]
  selectedOptions: Option[]
  selectOption: (option: Option, isDelete: boolean) => void
}

const OptionsList = ({
  options = [],
  selectedOptions = [],
  selectOption,
}: IOptionsList) => {

  const selectedOptionIds: Option['id'][] = useMemo(() => {
    return selectedOptions?.flatMap(({ id }) => id) ?? []
  }, [selectedOptions])

  return (
    <ul className={styles.optionsList}>
      {options.map((option: Option) => (
        <li key={option.id}>
          <button
            className={clsx(
              styles.optionsList__item,
              selectedOptionIds.includes(option.id) && styles.optionsList__item_active
            )}
            onClick={() => selectOption(option, selectedOptionIds.includes(option.id))}
          >
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default memo(OptionsList)