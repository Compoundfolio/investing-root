import React from 'react'
import { colors } from 'src/core/theme';

export interface IArrowIcon {
  orientation: "left" | "right"
}

const ArrowIcon = ({
  orientation = "left"
}: IArrowIcon) => {
  const rotationClass = orientation === "right" ? "rotate-180" : ""
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={rotationClass}>
      <path 
        d="M0.962533 3.95413L7.36723 3.95413L5.04308 6.35786L5.66396 7L9.0481 3.5L5.66396 1.84117e-07L5.04308 0.642144L7.36723 3.04587L0.962533 3.04587L0.962533 3.95413Z" 
        fill={colors.gray4C}
      />
    </svg>
  )
}

export default ArrowIcon
