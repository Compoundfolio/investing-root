"use client"

import { HTMLInputTypeAttribute, memo } from "react"
import { useControl } from "../hooks"
import { ShowPasswordButton, ShowPasswordIcon } from "./components"
import { Control } from "src/core/types"
import { usePassword } from "./hooks"
import styles from "./Input.module.css"
import { colors } from "src/core/theme"
import { FormControlBase } from "../FormControlBase"

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
  helpText = "",
  withMb = true,
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
    <FormControlBase
      required={required}
      value={value}
      name={name}
      labelText={labelText}
      helpText={helpText}
      withMb={withMb}
      {...restProps}
    >
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
          ...(!setErrorMessage && { margin: 0 })
        }}
      />
      {isPassword && (
        <ShowPasswordButton togglePasswordVisibility={togglePasswordVisibility}>
          <ShowPasswordIcon isPasswordVisible={isPasswordVisible} />
        </ShowPasswordButton>
      )}
    </FormControlBase>
  )
}

export default memo(Input)
