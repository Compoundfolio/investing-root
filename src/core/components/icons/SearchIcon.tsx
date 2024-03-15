import React from "react"
import clsx from "clsx"

const SearchIcon = (props: any) => {
  return (
    <svg
      {...props}
      className={clsx("w-5 h-5", props.className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4541 15.0656L20.9385 20.5494"
        stroke="#E0E0E0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9.7905"
        cy="10.0616"
        r="7.31101"
        stroke="#E0E0E0"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default SearchIcon
