"use client"

import { HTMLAttributes, HTMLInputTypeAttribute, memo } from "react"
import { ShowPasswordButton, ShowPasswordIcon } from "./components"
import { Control } from "src/core/types"
import { usePassword } from "./hooks"
import styles from "./Input.module.css"
import { colors } from "src/core/theme"
import { FormControlBase } from "../FormControlBase"
import CircleButton from "src/core/components/buttons/CircleButton/CircleButton"
import { CancelIcon, SearchIcon, Spinner } from "@core/components"
import { cancelStyle, resetSearchStyle, searchIconStyle } from "./consts"
import clsx from "clsx"

export interface IInput extends Omit<Control, "value"> {
  value: string | number
  type?: HTMLInputTypeAttribute
  search?: boolean
  isLoading?: boolean
  sharpBottomBorderRadius?: boolean
  resetInputValue?: () => void
  min?: number
  contentCentered?: boolean
  withShadow?: boolean
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"]
}

const Input = ({
  withShadow = false,
  search = false,
  required = false,
  autofocus = false,
  withMb = true,
  isLoading = false,
  sharpBottomBorderRadius = false,
  contentCentered = false,
  type = "text",
  helpText = "",
  value,
  name,
  labelText,
  placeholder,
  min,
  errorMessage,
  inputMode,
  style = {},
  resetInputValue,
  onChange,
  setErrorMessage,
  ...restProps
}: IInput) => {
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
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      {...restProps}
    >
      <input
        value={value}
        id={name}
        name={name}
        placeholder={placeholder}
        inputMode={inputMode}
        type={isPassword ? activePasswordType : type}
        onChange={onChange}
        className={styles.input}
        {...(min && { min })}
        // TODO: Get rid of style
        style={{
          ...(isPassword && { paddingRight: 46 }),
          ...(search && { paddingLeft: 32, paddingRight: 42 }),
          ...(errorMessage && { borderColor: colors.pinkSoft }),
          ...(!setErrorMessage && { margin: 0 }),
          ...(sharpBottomBorderRadius && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }),
          ...(contentCentered && { textAlign: "center" }),
          ...(withShadow && {
            boxShadow:
              "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }),
          ...style,
        }}
      />
      {isPassword && (
        <ShowPasswordButton togglePasswordVisibility={togglePasswordVisibility}>
          <ShowPasswordIcon isPasswordVisible={isPasswordVisible} />
        </ShowPasswordButton>
      )}
      {search && <SearchIcon style={searchIconStyle} />}
      {search &&
        (isLoading ? (
          <Spinner className="w-5 h-5" style={cancelStyle} />
        ) : (
          <CircleButton
            noShadow
            style={resetSearchStyle}
            onClick={resetInputValue!}
          >
            <CancelIcon />
          </CircleButton>
        ))}
    </FormControlBase>
  )
}

export default memo(Input)
