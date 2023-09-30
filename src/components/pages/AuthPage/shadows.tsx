import React from "react"
import styles from "./shadows.module.css"
import clsx from "clsx"

export const ShadowLeft = () => {
  return (
    <svg
      className={clsx(styles.shadow, styles.shadowLeft)}
      width="758"
      height="1078"
      viewBox="0 0 758 1078"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="758"
        height="1078"
        transform="matrix(-1 0 0 1 758 0)"
        fill="url(#paint0_linear_1043_7047)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1043_7047"
          x1="-2.1434e-05"
          y1="539"
          x2="758"
          y2="539"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const ShadowRight = () => {
  return (
    <svg
      className={clsx(styles.shadow, styles.shadowRight)}
      width="758"
      height="1080"
      viewBox="0 0 758 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="758" height="1080" fill="url(#paint0_linear_1043_7048)" />
      <defs>
        <linearGradient
          id="paint0_linear_1043_7048"
          x1="-2.1434e-05"
          y1="540"
          x2="758"
          y2="540"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  )
}
