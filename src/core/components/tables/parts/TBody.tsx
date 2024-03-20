import styles from "./TBody.module.css"
import React from "react"
import { IReactChildren } from "src/core/types"
import { Spinner } from "../../statuses"

interface ITBody extends IReactChildren {
  /** After this value table scroll table body appears */
  height?: number | string
  isLoading?: boolean
}

function TBody({ children, height, isLoading, ...rest }: ITBody) {
  return (
    // @ts-ignore - TODO: Resolve after MVV stage
    <tbody style={{ height }} className={styles.tbody} {...rest}>
      {isLoading ? <Spinner /> : children}
    </tbody>
  )
}

export default TBody
