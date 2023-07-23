import React from "react"
import { colors } from "src/core/theme"

interface IErrorIcon {
  className?: string
  width?: number
  height?: number
}

const ErrorIcon = ({ className = "", width = 20, height = 20 }: IErrorIcon) => {
  return (
    <svg
      className={className}
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 11C9.45 11 9 10.55 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V10C11 10.55 10.55 11 10 11ZM11 15H9V13H11V15Z"
        fill={colors.pinkSoft}
        fill-opacity="1"
      />
    </svg>
  )
}

export default ErrorIcon