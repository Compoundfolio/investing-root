import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './ActButton.module.css'

interface IActButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "green"
}

const ActButton = ({
  color = "primary",
  className,
  children,
  ...restProps
}: IActButton) => {
  return (
    <button
      className={clsx(
        styles.actButton,
        styles[`actButton--${color}`],
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default ActButton