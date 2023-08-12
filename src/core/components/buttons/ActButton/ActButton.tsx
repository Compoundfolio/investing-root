import React, { ButtonHTMLAttributes } from "react"
import clsx from "clsx"
import styles from "./ActButton.module.css"
import { Spinner } from "../../statuses"

interface IActButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "green" | "lowPrior"
  isLoading?: boolean
}

const ActButton = ({
  color = "primary",
  className,
  children,
  isLoading = false,
  ...restProps
}: IActButton) => {
  return (
    <button
      className={clsx(
        styles.actButton,
        styles[`actButton--${color}`],
        className
      )}
      aria-disabled={isLoading}
      disabled={isLoading}
      {...restProps}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default ActButton
