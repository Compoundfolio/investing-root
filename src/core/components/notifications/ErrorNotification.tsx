import React from "react"
import { ErrorIcon } from "../icons"
import styles from "./ErrorNotification.module.css"

interface IErrorNotification {
  message: string
  details?: string
}

const ErrorNotification = ({ message, details }: IErrorNotification) => {
  return (
    <div className={styles.errorNotification_wrap}>
      <ErrorIcon width={16} height={16} />
      <div className="text-sm text-white">
        <b className="inline-block mb-2">{message}</b> <br />
        {details && <span>{details}</span>}
      </div>
    </div>
  )
}

export default ErrorNotification
