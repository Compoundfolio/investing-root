"use client"

import { HTMLInputTypeAttribute, memo } from "react"
import { Label } from "../Label"
import { useControl } from "../hooks"
import { ControlErrorMessage } from "../ControlErrorMessage"
import { ShowPasswordButton, ShowPasswordIcon } from "./components"
import { Control } from "src/core/types"
import { usePassword } from "./hooks"
import styles from "./Input.module.css"
import { colors } from "src/core/theme"

export interface IInput extends Control {
  type?: HTMLInputTypeAttribute
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
  useControl({
    value,
    name,
    errorMessage,
    setErrorMessage,
  })

  const {
    isPasswordVisible,
    isPassword,
    activePasswordType,
    togglePasswordVisibility,
  } = usePassword({
    type,
  })

  return (
    <div className="relative mb-10" {...restProps}>
      <Label required={required} htmlFor={name} labelText={labelText} />
      <input
        value={value}
        id={name}
        name={name}
        placeholder={placeholder}
        type={isPassword ? activePasswordType : type}
        onChange={onChange}
        className={styles.input}
        style={{
          ...(isPassword && { paddingRight: 46 }),
          ...(errorMessage && { borderColor: colors.pinkSoft }),
        }}
      />
      {errorMessage && (
        <svg className="absolute mt-1 -right-8 top-1/2" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 11C9.45 11 9 10.55 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V10C11 10.55 10.55 11 10 11ZM11 15H9V13H11V15Z" fill={colors.pinkSoft} fill-opacity="1" />
        </svg>
      )}
      {isPassword && (
        <ShowPasswordButton togglePasswordVisibility={togglePasswordVisibility}>
          <ShowPasswordIcon isPasswordVisible={isPasswordVisible} />
        </ShowPasswordButton>
      )}
      {errorMessage && <ControlErrorMessage errorMessage={errorMessage} />}
    </div>
  )
}

export default memo(Input)
