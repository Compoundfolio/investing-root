"use client"

import React, { memo } from 'react'
import { useControl } from '../hooks'
import { Label } from '../Label'
import { ErrorIcon } from '@core/components'
import { ControlErrorMessage } from '../ControlErrorMessage';
import { IFormControlBase } from './types';
import clsx from 'clsx';

const FormControlBase = ({
  value,
  name,
  labelText,
  errorMessage,
  required = false,
  erroringField,
  children,
  className = "",
  setErrorMessage,
  ...restProps
}: IFormControlBase) => {

  useControl({
    value,
    name,
    errorMessage,
    setErrorMessage,
  })

  const wrapperClassName = erroringField ? "relative mb-10" : ""
  const toShowError = erroringField && errorMessage

  return (
    <div className={clsx(wrapperClassName, className)} {...restProps}>
      {labelText && (
        <Label
          required={required}
          htmlFor={name}
          labelText={labelText}
        />
      )}
      {children}
      {toShowError && (
        <ErrorIcon
          width={16}
          height={16}
          className="absolute mt-1 -right-8 top-1/2"
        />
      )}
      {toShowError && (
        <ControlErrorMessage errorMessage={errorMessage} />
      )}
    </div>
  )
}

export default memo(FormControlBase)