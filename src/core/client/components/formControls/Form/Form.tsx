"use client"

import { ErrorNotification } from "@core/components"
import { memo } from "react"
import { IReactChildren } from "src/core/types"
import { PostFormSubmitError } from "src/inversions"

interface IForm extends IReactChildren {
  onSubmit: (e?: any) => void
  postSubmitError?: PostFormSubmitError
}

const Form = ({ children, className, onSubmit, postSubmitError }: IForm) => {
  const handleSubmit = (e) => {
    onSubmit(e)
  }

  return (
    <div className="flex flex-col gap-4">
      {postSubmitError && (
        <ErrorNotification
          message={postSubmitError.message}
          details={postSubmitError.details}
          // message="The email and password combination not found."
          // details="Please check your credentials and try once again."
        />
      )}
      <form
        className={className}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        {children}
      </form>
    </div>
  )
}

export default memo(Form)
