import React from "react"
import { IReactChildren } from "src/core/types"
import styles from "./TWrapper.module.css"
import clsx from "clsx"
import { EmptyTableState } from "../../blocks"

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
      {size == 0 && <EmptyTableState />}
    </section>
  )
}

export default TWrapper
