import { memo } from "react"
import { UseFormHookError } from "src/core/types"
import styles from "./ControlErrorMessage.module.css"
import clsx from "clsx"

interface IControlErrorMessage {
  errorMessage: UseFormHookError
}

const ControlErrorMessage = ({
  errorMessage,
  ...rest
}: IControlErrorMessage) => {
  return (
    <span className={clsx(styles.controlErrorMessage, "color-red")} {...rest}>
      {errorMessage as string}
    </span>
  )
}

export default memo(ControlErrorMessage)
