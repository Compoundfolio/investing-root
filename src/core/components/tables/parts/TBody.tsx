import styles from "./TBody.module.css"
import React from "react"
import { IReactChildren } from "src/core/types"

interface ITBody extends IReactChildren {
  /** After this value table scroll table body appears */
  height?: number | string
}

function TBody({ children, height = "inherit", ...rest }: ITBody) {
  return (
    <tbody style={{ height }} className={styles.tbody} {...rest}>
      {children}
    </tbody>
  )
}

export default TBody
