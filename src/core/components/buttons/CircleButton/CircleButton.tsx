"use client"

import React, { memo } from "react"
import { ICircleButton } from "./types"
import clsx from 'clsx';

const CircleButton = ({ children, onClick, style = {}, noShadow = false }: ICircleButton) => {
  const shadowStyle = !noShadow && "shadow-md"
  return (
    <button
      type="button"
      style={style}
      onClick={onClick}
      className={clsx("inline-block p-1 text-xs font-medium leading-normal text-white uppercase transition duration-150 ease-in-out rounded-full hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg")}
    >
      {children}
    </button>
  )
}

export default memo(CircleButton)
