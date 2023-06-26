"use client"

import React from "react"
import styles from "./DescriptionPopUp.module.css"
import clsx from "clsx"

interface IDescriptionPopUp {
  description: string
}

const DescriptionPopUp = ({ description }: IDescriptionPopUp) => {
  return (
    <div className="relative flex group cursor-help">
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0776 18.5839C14.2624 18.5839 17.6548 14.9006 17.6548 10.357C17.6548 5.81342 14.2624 2.13013 10.0776 2.13013C5.8929 2.13013 2.50049 5.81342 2.50049 10.357C2.50049 14.9006 5.8929 18.5839 10.0776 18.5839Z"
          stroke="#EBEBF5"
          stroke-opacity="0.3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.0781 7.06616V10.3569"
          stroke="#EBEBF5"
          stroke-opacity="0.3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <ellipse
          cx="10.078"
          cy="13.6476"
          rx="0.757716"
          ry="0.822687"
          fill="#EBEBF5"
          fill-opacity="0.3"
        />
      </svg>
      <span
        className={clsx(
          "absolute px-4 py-2 m-4 mx-auto text-sm text-gray-100 transition-opacity -translate-x-1/2 translate-y-full bg-gray-800 rounded-md opacity-0 group-hover:opacity-100",
          styles.tooltipBlock
        )}
      >
        {description}
      </span>
    </div>
  )
}

export default DescriptionPopUp
