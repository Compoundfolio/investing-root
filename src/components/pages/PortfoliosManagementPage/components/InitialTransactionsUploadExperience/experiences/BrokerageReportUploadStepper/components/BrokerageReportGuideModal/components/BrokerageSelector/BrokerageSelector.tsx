import { colors } from "@core"
import React, { memo } from "react"
import styles from "./BrokerageSelector.module.css"
import clsx from "clsx"
import { Option } from "src/core/types"

interface IBrokerageSelector {
  selectedBrokerage: Option
  brokerages: Option[]
  setSelectedBrokerage: React.Dispatch<React.SetStateAction<Option>>
}
const BrokerageSelector = ({
  selectedBrokerage,
  brokerages,
  setSelectedBrokerage,
}: IBrokerageSelector) => {
  return (
    <aside className={styles.brokerageSelector}>
      <ul className="flex flex-col h-full gap-2 w-hull">
        {brokerages.map((brokerage) => {
          const isSelected = selectedBrokerage?.label === brokerage.label
          return (
            <ol
              key={brokerage.label}
              className={clsx([
                styles.brokerageSelector__item,
                isSelected && styles.brokerageSelector__item__active,
              ])}
            >
              <button
                onClick={() => setSelectedBrokerage(brokerage)}
                className="relative w-full h-full"
              >
                <div className="flex items-center justify-center">
                  {brokerage.icon(42)}
                </div>
                <svg
                  className="absolute bottom-1 right-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <path
                    d="M4.54275 4.54251L8.31878 0.346924V8.73809H0.347168L4.54275 4.54251Z"
                    fill={isSelected ? colors.white : colors.grayC4}
                  />
                </svg>
              </button>
              {isSelected && (
                <div className={styles.activeItemMark}>
                  <div
                    className={clsx([styles.activeItemMark__item, "h-[2px]"])}
                  />
                  <div
                    className={clsx([styles.activeItemMark__item, "h-[13px]"])}
                  />
                  <div
                    className={clsx([styles.activeItemMark__item, "h-[45px]"])}
                  />
                </div>
              )}
            </ol>
          )
        })}
      </ul>
    </aside>
  )
}

export default memo(BrokerageSelector)
