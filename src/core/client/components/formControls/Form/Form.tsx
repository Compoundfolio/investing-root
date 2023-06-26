"use client"

import { memo } from "react"
import { IReactChildren } from "src/core/types"

interface IForm extends IReactChildren {
  onSubmit: () => void
}

const Form = ({ children, className, onSubmit }: IForm) => {
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      noValidate
      autoComplete="off"
    >
      {children}
    </form>
  )
}

export default memo(Form)
