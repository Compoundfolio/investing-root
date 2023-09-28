import React, { ButtonHTMLAttributes } from "react"
import clsx from "clsx"
import styles from "./ActButton.module.css"
import { Spinner } from "../../statuses"

interface IActButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "green" | "lowPrior"
  isLoading?: boolean
  width?: string
  bigActButton?: boolean
}

const ActButton = ({
  color = "primary",
  className,
  children,
  isLoading = false,
  disabled,
  width,
  bigActButton,
  ...restProps
}: IActButton) => {
  return (
    <button
      className={clsx(
        styles.actButton,
        styles[`actButton--${color}`],
        disabled && styles[`actButton--disabled`],
        className,
        bigActButton && styles.actButtonBig
      )}
      style={{ ...(width && { width }) }}
      aria-disabled={isLoading || disabled}
      disabled={isLoading || disabled}
      {...restProps}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default ActButton
