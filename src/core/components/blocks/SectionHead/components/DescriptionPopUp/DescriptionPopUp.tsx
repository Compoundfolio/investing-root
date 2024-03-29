import React, { ReactNode } from "react"
import { PopUp } from "src/core/components/help"

interface IDescriptionPopUp {
  description: ReactNode
}

const DescriptionPopUp = ({ description }: IDescriptionPopUp) => {
  return (
    <div className="relative flex group">
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer group-hover:opacity-50"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0776 18.5839C14.2624 18.5839 17.6548 14.9006 17.6548 10.357C17.6548 5.81342 14.2624 2.13013 10.0776 2.13013C5.8929 2.13013 2.50049 5.81342 2.50049 10.357C2.50049 14.9006 5.8929 18.5839 10.0776 18.5839Z"
          stroke="#EBEBF5"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0781 7.06616V10.3569"
          stroke="#EBEBF5"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse
          cx="10.078"
          cy="13.6476"
          rx="0.757716"
          ry="0.822687"
          fill="#EBEBF5"
          fillOpacity="0.3"
        />
      </svg>
      <PopUp showOnHover>{description}</PopUp>
    </div>
  )
}

export default DescriptionPopUp
