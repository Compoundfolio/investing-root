"use client"

import React, { memo } from "react"
import { useControl } from "../hooks"
import { Label } from "../Label"
import { ErrorIcon, HelpText } from "@core/components"
import { ControlErrorMessage } from "../ControlErrorMessage"
import { IFormControlBase } from "./types"
import clsx from "clsx"

const FormControlBase = ({
  value,
  name,
  labelText,
  errorMessage,
  required = false,
  erroringField = true,
  children,
  className = "",
  helpText = "",
  withMb = true,
  setErrorMessage,
  ...restProps
}: IFormControlBase) => {
  useControl({
    value,
    name,
    errorMessage,
    setErrorMessage,
  })

  const wrapperClassName =
    erroringField && withMb ? `relative ${withMb ? "mb-10" : ""}` : ""

  return (
    <div className={clsx(wrapperClassName, className)} {...(restProps as any)}>
      {labelText && (
        <Label required={required} htmlFor={name} labelText={labelText} />
      )}
      {children}
      {errorMessage ? (
        <>
          <ErrorIcon
            width={16}
            height={16}
            className="absolute mt-1 -right-8 top-1/2"
          />
          <ControlErrorMessage errorMessage={errorMessage} />
        </>
      ) : (
        helpText && <HelpText helpText={helpText} />
      )}
    </div>
  )
}

export default memo(FormControlBase)
