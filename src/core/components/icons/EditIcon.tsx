import React from 'react'

const EditIcon = ({ className = "", isPartOfIconButton = false }) => {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_605_8871)">
        <path d="M7 21.25V25H10.75L21.81 13.94L18.06 10.19L7 21.25ZM24.71 11.04C25.1 10.65 25.1 10.02 24.71 9.63L22.37 7.29C21.98 6.9 21.35 6.9 20.96 7.29L19.13 9.12L22.88 12.87L24.71 11.04Z" fill="#1290FF" />
      </g>
      {isPartOfIconButton && <rect width="32" height="32" rx="16" fill="#1290FF" fill-opacity="0.1" />}
      <defs>
        <clipPath id="clip0_605_8871">
          <rect width="24" height="24" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default EditIcon