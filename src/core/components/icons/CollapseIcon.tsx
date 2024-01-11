import React from "react"

const allowedRotateClasses = [
  "rotate-0",
  "rotate-90",
  "rotate-180",
  "rotate-270",
  "rotate-360",
] as const

type RotationExtractor<S extends string> = S extends `rotate-${infer TDeg}`
  ? TDeg
  : S

type RotateDeg = RotationExtractor<(typeof allowedRotateClasses)[number]>

export interface ICollapseIcon {
  width?: number
  rotate180?: boolean
  rotateDeg?: RotateDeg
  color?: string
}

const CollapseIcon = ({
  width = 24,
  rotate180,
  rotateDeg,
  color = "white",
}: ICollapseIcon) => {
  const rotationClass = rotate180
    ? "rotate-180"
    : rotateDeg
    ? `rotate-${rotateDeg}`
    : ""

  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={rotationClass}
    >
      <path
        d="M15.8793 14.7099L11.9993 10.8299L8.1193 14.7099C7.7293 15.0999 7.0993 15.0999 6.7093 14.7099C6.3193 14.3199 6.3193 13.6899 6.7093 13.2999L11.2993 8.70994C11.6893 8.31994 12.3193 8.31994 12.7093 8.70994L17.2993 13.2999C17.6893 13.6899 17.6893 14.3199 17.2993 14.7099C16.9093 15.0899 16.2693 15.0999 15.8793 14.7099Z"
        fill={color}
      />
    </svg>
  )
}

export default CollapseIcon
