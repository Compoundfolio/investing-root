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
      className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
      onClick={togglePasswordVisibility}
    >
      {children}
    </button>
  )
}

export default ShowPasswordButton