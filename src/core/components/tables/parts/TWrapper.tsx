import React from "react"
import { IReactChildren } from "src/core/types"
import styles from "./TWrapper.module.css"
import clsx from "clsx"
import { colors } from "src/core/theme"

interface ITWrapper extends IReactChildren {
  title: string
  size: number
}

function TWrapper({ children, title, size }: ITWrapper) {
  return (
    <section
      className={clsx([styles.twrap, "w-full flex flex-col h-full"])}
    >
      <div className="flex flex-col">
        <h2 className={styles.tableName}>{title}</h2>
        {size > 0 && <span className={styles.tableSize}>[{size}]</span>}
      </div>
      {children}
      {size == 0 && (
          <section
          className='flex items-center justify-center w-full p-20 text-gray-400'
          style={{
            borderTop: `1px ${colors.gray4C} solid`,
            borderBottom: `1px ${colors.gray4C} solid`,
          }}
        >
          List is empty 🤔
        </section>
      )}
    </section>
  )
}

export default TWrapper
