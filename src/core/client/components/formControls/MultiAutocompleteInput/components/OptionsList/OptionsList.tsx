import React, { memo, useMemo, useRef } from "react"
import styles from "./OptionsList.module.css"
import clsx from "clsx"
import { Option } from "src/core/types"
import { useOverlayUiUnmountTriggers } from "src/core/hooks"

interface IOptionsList {
  options: Option[]
  selectedOptions: Option[]
  selectOption: (option: Option, isDelete: boolean) => void
  closeOptionsList: () => void
}

const OptionsList = ({
  options = [],
  selectedOptions = [],
  selectOption,
  closeOptionsList,
}: IOptionsList) => {
  const selectedOptionIds: Option["id"][] = useMemo(() => {
    return selectedOptions?.flatMap(({ id }) => id) ?? []
  }, [selectedOptions])

  const ref = useRef(null)

  useOverlayUiUnmountTriggers({
    ref,
    hideOverlapComponent: closeOptionsList,
  })

  return (
    <ul ref={ref} className={styles.optionsList}>
      {options.map((option: Option) => (
        <li key={option.id}>
          <button
            className={clsx(
              styles.optionsList__item,
              selectedOptionIds.includes(option.id) &&
                styles.optionsList__item_active
            )}
            onClick={() =>
              selectOption(option, selectedOptionIds.includes(option.id))
            }
          >
            {option?.icon}
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default memo(OptionsList)
