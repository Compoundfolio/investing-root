"use client"

import { HTMLInputTypeAttribute, memo } from "react"
import { ShowPasswordButton, ShowPasswordIcon } from "./components"
import { Control } from "src/core/types"
import { usePassword } from "./hooks"
import styles from "./Input.module.css"
import { colors } from "src/core/theme"
import { FormControlBase } from "../FormControlBase"
import CircleButton from 'src/core/components/buttons/CircleButton/CircleButton';
import { CancelIcon, SearchIcon, Spinner } from "@core/components"
import { cancelStyle, resetSearchStyle, searchIconStyle } from "./consts"

export interface IInput extends Omit<Control, "value"> {
  value: string | number
  type?: HTMLInputTypeAttribute
  search?: boolean
  isLoading?: boolean
  sharpBottomBorderRadius?: boolean
  resetInputValue?: () => void
  min?: number
}

const Input = ({
  search = false,
  required = false,
  autofocus = false,
  withMb = true,
  isLoading = false,
  sharpBottomBorderRadius = false,
  type = "text",
  helpText = "",
  value,
  name,
  labelText,
  placeholder,
  min,
  errorMessage,
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
        {...(min && { min })}
        style={{
          ...(isPassword && { paddingRight: 46 }),
          ...(search && { paddingLeft: 32, paddingRight: 42 }),
          ...(errorMessage && { borderColor: colors.pinkSoft }),
          ...(!setErrorMessage && { margin: 0 }),
          ...(sharpBottomBorderRadius && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })
        }}
      />
      {isPassword && (
        <ShowPasswordButton togglePasswordVisibility={togglePasswordVisibility}>
          <ShowPasswordIcon isPasswordVisible={isPasswordVisible} />
        </ShowPasswordButton>
      )}
      {search && (
        <SearchIcon style={searchIconStyle}/>
      )}
      {search && (
        isLoading ? (
          <Spinner className="w-5 h-5" style={cancelStyle} />
        ) : (
          <CircleButton noShadow style={resetSearchStyle} onClick={resetInputValue!}>
            <CancelIcon />
          </CircleButton>
        )
      )}
    </FormControlBase>
  )
}

export default memo(Input)
