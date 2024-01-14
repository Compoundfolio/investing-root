import React, { memo, useCallback, useMemo } from "react"
import styles from "./BrokerageSelectionArea.module.css"
import clsx from "clsx"
import { allSupportedBrokerages } from "./consts"
import { Option, removeObjectFromArrayOfObjects } from "@core"

interface IBrokerageSelectionArea {
  selectedBrokerages: Option[]
  setSelectedBrokerages: React.Dispatch<React.SetStateAction<Option[]>>
  disableContinueButton: React.Dispatch<React.SetStateAction<boolean>>
}

const BrokerageSelectionArea = ({
  selectedBrokerages,
  setSelectedBrokerages,
  disableContinueButton,
}: IBrokerageSelectionArea) => {
  const selectedBrokerageIds: Option["id"][] = useMemo(() => {
    return selectedBrokerages?.flatMap(({ id }) => id) ?? []
  }, [selectedBrokerages])

  const selectOption = useCallback(
    (option: Option, isDelete: boolean) => {
      const options = isDelete
        ? removeObjectFromArrayOfObjects<Option>(
            selectedBrokerages,
            option,
            "id"
          )
        : [...selectedBrokerages, option]

      setSelectedBrokerages(options)
      disableContinueButton(!!!options.length)
    },
    [selectedBrokerages]
  )

  return (
    <ul className={styles.optionsList}>
      {allSupportedBrokerages.map((option: Option) => (
        <li key={option.id}>
          <button
            className={clsx(
              styles.optionsList__item,
              selectedBrokerageIds.includes(option.id) &&
                styles.optionsList__item_active
            )}
            onClick={() =>
              selectOption(option, selectedBrokerageIds.includes(option.id))
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

export default memo(BrokerageSelectionArea)
