import React from "react"
import { IReactChildren } from "src/core/types"
import styles from "./TWrapper.module.css"
import clsx from "clsx"
import { EmptyTableState } from "../../blocks"
import { SectionTitle } from "../../text"

interface ITWrapper extends IReactChildren {
  title: string
  size?: number
}

function TWrapper({ children, title, size }: ITWrapper) {
  return (
    <section className={clsx([styles.twrap, "w-full flex flex-col h-full"])}>
      <SectionTitle title={title} size={size} />
      {children}
      {size == 0 && <EmptyTableState />}
    </section>
  )
}

export default TWrapper
