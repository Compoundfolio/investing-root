import React from "react"

interface OrDivider {
  authTitle: string
}

const OrDivider = ({ authTitle }) => {
  return (
    <div className="flex items-center mt-6 mb-3">
      <hr className="w-full border-gray-500" />
      <span className="text-center text-gray-500" style={{ width: "150%" }}>
        Or {authTitle.toLowerCase()} with
      </span>
      <hr className="w-full border-gray-500" />
    </div>
  )
}

export default OrDivider
