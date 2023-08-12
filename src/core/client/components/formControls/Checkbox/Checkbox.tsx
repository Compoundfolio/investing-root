import React, { memo } from 'react'
import { Control } from 'src/core/types'
import { FormControlBase } from '../FormControlBase'
import { colors } from 'src/core/theme'
import './Checkbox.css'

export interface ICheckbox extends Omit<Control, "value"> {
  checked: boolean
  description: string
}

const Checkbox = ({
  checked,
  name,
  labelText,
  placeholder,
  errorMessage,
  required = false,
  autofocus = false,
  helpText = "",
  description = "",
  withMb = true,
  onChange,
  setErrorMessage,
  ...restProps
}: ICheckbox) => {
  return (
    <FormControlBase
      required={required}
      value={checked}
      name={name}
      labelText={labelText}
      helpText={helpText}
      withMb={withMb}
      {...restProps}
    >
      <label className="pure-material-checkbox">
        <input
          checked={checked}
          id={name}
          name={name}
          placeholder={placeholder}
          type="checkbox"
          onChange={onChange}
          style={{
            ...(errorMessage && { borderColor: colors.pinkSoft }),
            ...(!setErrorMessage && { margin: 0 })
          }}
        />
        <span className='flex' style={{ display: "flex" }}>
          <span className='checkboxDescriptionText'>{description}</span>
        </span>
      </label>
    </FormControlBase>
  )
}

export default memo(Checkbox)