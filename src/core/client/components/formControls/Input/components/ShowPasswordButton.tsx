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
      className="absolute right-0 flex items-center p-2.5 text-gray-600 rounded-lg hover:bg-gray-600 hover:text-white"
      style={{ top: "calc(50% - 6.5px)", marginRight: 2.5 }}
      onClick={togglePasswordVisibility}
    >
      {children}
    </button>
  )
}

export default ShowPasswordButton
