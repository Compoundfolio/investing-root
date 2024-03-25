import React from "react"

const GoToBeginningIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M11 9.7075L6.93151 5.5L11 1.2925L9.7502 -1.70478e-06L4.43191 5.5L9.7502 11L11 9.7075ZM0 0L1.77276 -3.0996e-07L1.77277 11L1.9233e-06 11L0 0Z"
        fill="#C4C4C4"
      />
    </svg>
  )
}

const GoToTheEndIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M-1.74211e-07 1.2925L4.06849 5.5L-9.09873e-07 9.7075L1.2498 11L6.56809 5.5L1.2498 3.39703e-07L-1.74211e-07 1.2925ZM11 11L9.22724 11L9.22724 1.03711e-06L11 1.19209e-06L11 11Z"
        fill="white"
      />
    </svg>
  )
}

const GoForwardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="11"
      viewBox="0 0 7 11"
      fill="none"
    >
      <path
        d="M7 1.28902L2.65816 5.5L7 9.71098L5.67092 11L-4.72849e-07 5.5L5.67092 8.37482e-07L7 1.28902Z"
        fill="#C4C4C4"
      />
    </svg>
  )
}

const GoBackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="11"
      viewBox="0 0 7 11"
      fill="none"
    >
      <path
        d="M0 9.71098L4.34184 5.5L0 1.28902L1.32908 0L7 5.5L1.32908 11L0 9.71098Z"
        fill="#C4C4C4"
      />
    </svg>
  )
}

const PaginationNavigation = {
  GoToBeginningIcon,
  GoToTheEndIcon,
  GoForwardIcon,
  GoBackIcon,
}

export default PaginationNavigation
