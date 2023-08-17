"use client"

import { memo, useCallback } from "react"
import { Control, Option } from "src/core/types"
import styles from "./Select.module.css"
import { colors } from "src/core/theme"
import { FormControlBase } from "../FormControlBase"
import clsx from 'clsx';
import { useOpen } from 'src/core/hooks';

export interface ISelect extends Omit<Control, "value"> {
  value: Option
  options: Option[]
}

const Select = ({
  value,
  name,
  labelText,
  placeholder,
  errorMessage,
  required = false,
  autofocus = false,
  helpText = "",
  withMb = true,
  options,
  onChange,
  setErrorMessage,
  ...restProps
}: ISelect) => {
  const [isOptionOpened, handleOptionsOpenedChange] = useOpen()

  const handleChange = useCallback((option: Option) => {
    onChange && onChange({
      // @ts-ignore
      id: option.id,
      value: option.value,
      label: option.label,
    })
    isOptionOpened && handleOptionsOpenedChange()
  }, [onChange, isOptionOpened])

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
      {/* <select
       value={value}
       id={name}
       name={name}
       placeholder={placeholder}
       onChange={onChange}
       className={styles.select}
       style={{
         ...(errorMessage && { borderColor: colors.pinkSoft }),
         ...(!setErrorMessage && { margin: 0 }),
       }}
      >
        {options?.map(option => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}


      <div className={clsx("relative", styles.select)}>
        <button className="relative w-full text-gray-900 cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <span className="flex items-center">
            <span className="block ml-3 truncate">{value.label}</span>
          </span>
        </button>
        <ul className={clsx("absolute let-0 top-10 z-10 w-full overflow-auto focus:outline-none", styles.select_optionList)}>
          {options.map((option) => (
            <li
              key={option.id}
            >
              <button
                className={clsx(
                  option.id === value.id ? 'bg-indigo-600 text-white' : 'text-gray-900',
                  'w-full relative cursor-default select-none py-2 pl-3 pr-9',
                  styles
                )}
                onClick={() => handleChange(option)}
              >
                <div className="flex items-center">
                  <span
                    className={clsx(option.id === value.id ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                  >
                    {option.label}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

    </FormControlBase>
  )
}

export default memo(Select)