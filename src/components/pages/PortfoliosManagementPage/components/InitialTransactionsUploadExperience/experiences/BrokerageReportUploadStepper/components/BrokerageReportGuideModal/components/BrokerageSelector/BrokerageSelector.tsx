import { colors } from "@core"
import React, { memo } from "react"
import styles from "./BrokerageSelector.module.css"
import clsx from "clsx"

interface IBrokerageSelector {
  // TODO:
}

const BrokerageSelector = ({
  selectedBrokerage,
  brokerages,
  setSelectedBrokerage,
}) => {
  return (
    <aside className={styles.brokerageSelector}>
      <ul className="flex flex-col h-full gap-2 w-hull">
        {brokerages.map((brokerage) => {
          const isSelected = selectedBrokerage === brokerage.label
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
                <div className="w-8 h-8">{brokerage.icon}</div>
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <path
                    d="M4.54275 4.54251L8.31878 0.346924V8.73809H0.347168L4.54275 4.54251Z"
                    fill={colors.grayC4}
                  />
                </svg>
              </button>
            </ol>
          )
        })}
      </ul>
    </aside>
  )
}

export default memo(BrokerageSelector)
