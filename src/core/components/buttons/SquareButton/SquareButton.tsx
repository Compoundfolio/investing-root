"use client"

import React, { memo } from "react"
import { ISquareButton } from "./types"
import clsx from "clsx"

const SquareButton = ({ children, onClick, className }: ISquareButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-block p-1 text-xs font-medium leading-normal text-white uppercase transition duration-150 ease-in-out rounded-full hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg",
        className
      )}
    >
      {children}
    </button>
  )
}

export default memo(SquareButton)
