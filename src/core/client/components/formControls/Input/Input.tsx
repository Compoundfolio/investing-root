"use client"

import { ChangeEventHandler, HTMLInputTypeAttribute, memo, useState } from 'react'
import { Label } from '../Label'
import { useClearErrorMessage } from '../hooks'
import { ControlErrorMessage } from '../ControlErrorMessage'
import { ShowPasswordButton, ShowPasswordIcon } from './components'

// TODO: Make stuff ultra-reusable

// TODO: Form control HOC ???

interface IInput {
  value: string
  name: string
  labelText: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  type?: HTMLInputTypeAttribute
  autofocus?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  setErrorMessage?: (field: string, value: string | undefined) => void
}

const Input = ({
  value,
  name,
  labelText,
  placeholder,
  errorMessage,
  required = false,
  type = "text",
  autofocus = false,
  onChange,
  setErrorMessage,
  ...restProps
}: IInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const isPassword = type === "password"
  const activePasswordType = isPasswordVisible ? "text" : "password"

  useClearErrorMessage({
    value,
    name,
    errorMessage,
    setErrorMessage,
  })

  return (
    <div className="relative mb-10" {...restProps}>
      <Label
        required={required}
        htmlFor={name}
        labelText={labelText}
      />
      <input
        value={value}
        id={name}
        name={name}
        autoComplete={name}
        placeholder={placeholder}
        type={isPassword ? activePasswordType : type}
        onChange={onChange}
        className="mt-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
      />
      {isPassword && (
        <ShowPasswordButton togglePasswordVisibility={togglePasswordVisibility}>
          <ShowPasswordIcon isPasswordVisible={isPasswordVisible}  />
        </ShowPasswordButton>
      )}
      {errorMessage && <ControlErrorMessage errorMessage={errorMessage} />}
    </div>
  )
}

export default memo(Input)