import React from "react"

const DeleteIcon = ({ className = "", isPartOfIconButton = false }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillOpacity="url(#clip0_605_8874)">
        <path
          d="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V11H10V23ZM23 8H19.5L18.5 7H13.5L12.5 8H9V10H23V8Z"
          fill="#1290FF"
        />
      </g>
      {isPartOfIconButton && (
        <rect width="32" height="32" rx="16" fill="#1290FF" fillOpacity="0.1" />
      )}
      <defs>
        <clipPath id="clip0_605_8874">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default DeleteIcon
