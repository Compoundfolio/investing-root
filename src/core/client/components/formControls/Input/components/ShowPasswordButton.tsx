"use client"

import { IReactChildren } from "src/core/types"

interface IShowPasswordButton extends IReactChildren {
  togglePasswordVisibility: () => void
}

const ShowPasswordButton = ({
  togglePasswordVisibility,
  children,
}: IShowPasswordButton) => {
  return (
    <button
      type="button"
      className="absolute right-0 flex items-center px-4 text-gray-600 top-1/2"
      onClick={togglePasswordVisibility}
    >
      {children}
    </button>
  )
}

export default ShowPasswordButton