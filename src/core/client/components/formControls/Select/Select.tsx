"use client"

import { memo, useCallback } from "react"
import { Control, Option, UseFormHookHelpers } from "src/core/types"
import styles from "./Select.module.css"
import { FormControlBase } from "../FormControlBase"
import clsx from 'clsx';
import { useOpen } from 'src/core/hooks';
import { CollapseIcon } from "@core/components"

export interface ISelect extends Omit<Control, "value" | "onChange" | "placeholder"> {
  value: Option
  options: Option[]
  setFieldValue: UseFormHookHelpers["setFieldValue"]
}

const Select = ({
  value,
  name,
  labelText,
  errorMessage,
  required = false,
  autofocus = false,
  helpText = "",
  withMb = true,
  options,
  setFieldValue,
  setErrorMessage,
  ...restProps
}: ISelect) => {
  const [isOptionOpened, handleOptionsOpenedChange, setIsOptionOpened] = useOpen()

  const handleChange = useCallback((option: Option) => {
    setFieldValue(name, option)
    setIsOptionOpened(false)
  }, [isOptionOpened])

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
      <div className={clsx("relative", styles.select, isOptionOpened && styles.select_active)}>
        <button type="button" onClick={handleOptionsOpenedChange} className={clsx("relative flex items-center justify-between w-full h-full gap-2 text-gray-900 cursor-default", styles.select_button)}>
          <span className="flex items-center">
            <span className="block truncate">{value.label}</span>
          </span>
          <CollapseIcon rotate180={isOptionOpened} />
        </button>
        {isOptionOpened && (
          <ul className={clsx("absolute let-0 top-10 z-10 w-full overflow-auto focus:outline-none", styles.select_optionList)}>
            {options.map((option) => (
              <li
                key={option.id}
              >
                <button
                  type="button"
                  className={clsx(
                    option.id === value.id && styles.select_optionList_item__active,
                    'w-full relative select-none cursor-pointer',
                    styles.select_optionList_item
                  )}
                  onClick={() => handleChange(option)}
                >
                  <div className="flex items-center">
                    <span
                      className={clsx(option.id === value.id ? 'font-semibold' : 'font-normal', 'block truncate')}
                    >
                      {option.label}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
        {/* TODO: Empty options message */}
      </div>
    </FormControlBase>
  )
}

export default memo(Select)