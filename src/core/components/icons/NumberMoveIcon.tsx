import { memo } from "react"
import { colors } from "src/core/theme"
import styles from "./NumberMoveIcon.module.css"

type INumberMoveIcon = {
  isPositiveMove: boolean
  color?: string
}

const NumberMoveIcon = ({ isPositiveMove, color }: INumberMoveIcon) => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isPositiveMove ? styles.positiveMove : styles.negativeMove}
    >
      <g filter="url(#filter0_d_543_29722)">
        <path
          d="M10.2974 0L16.2974 8H4.29736L10.2974 0Z"
          fill={color ?? (isPositiveMove ? colors.darkGreen : colors.pinkSoft)}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_543_29722"
          x="0.297363"
          y="0"
          width="16"
          height="8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_543_29722"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_543_29722"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default memo(NumberMoveIcon)
