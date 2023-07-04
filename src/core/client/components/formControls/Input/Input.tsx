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
          ...(isPassword) && { paddingRight: 46 },
          ...(errorMessage) && { borderColor: colors.pinkSoft },
        }}
      />
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
