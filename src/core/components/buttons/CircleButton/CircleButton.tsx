"use client"

import React, { memo } from 'react'
import { ICircleButton } from './types'

const CircleButton = ({
  children,
  onClick,
}: ICircleButton) => {
  return (
    <button
      onClick={onClick}
      className="inline-block p-3 mb-2 text-xs font-medium leading-normal text-white uppercase transition duration-150 ease-in-out rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
    >
      {children}
    </button>
  )
}

export default memo(CircleButton)