"use client"

import React from 'react'
import Datepicker, { DateValueType, DatepickerType } from 'react-tailwindcss-datepicker';
import { Control } from 'src/core/types';
import { FormControlBase } from '../FormControlBase';

interface IDateRangePicker extends Omit<Control, "value" | "onChange" | "autofocus"> {
  value: DateValueType
  disabledDates?: DatepickerType['disabledDates']
  startFrom?: DatepickerType['startFrom']
  displayFormat?: DatepickerType['displayFormat']
  minDate?: DatepickerType['minDate']
  maxDate?: DatepickerType['maxDate']
  onChange: (newValue: DateValueType) => void
}

/**
 * Used with `useDateRangePickerState` hook
 *
 * @example
 *
 * const {
 *  dateRangeValue,
 *  handleDateRangeChange
 * } = useDateRangePickerState()
*/
const DateRangePicker = ({
  value,
  labelText = "Date range",
  required = false,
  helpText = "",
  withMb = true,
  name,
  placeholder,
  errorMessage,
  minDate,
  maxDate,
  startFrom,
  displayFormat = "DD/MM/YYYY",
  disabledDates,
  onChange,
}: IDateRangePicker) => {

  const inputClassName = ""
  const containerClassName = ""
  const toggleClassName = ""

  return (
    <FormControlBase
      required={required}
      value={value}
      name={name}
      labelText={labelText}
      helpText={helpText}
      withMb={withMb}
      errorMessage={errorMessage}
    >
      <Datepicker
        primaryColor="blue"
        inputClassName={inputClassName}
        containerClassName={containerClassName}
        toggleClassName={toggleClassName}
        value={value}
        onChange={onChange}
        startFrom={startFrom}
        startWeekOn="mon"
        showShortcuts={true}
        showFooter={true}
        displayFormat={displayFormat}
        minDate={minDate}
        maxDate={maxDate}
        disabledDates={disabledDates}
        placeholder={placeholder}

      />
    </FormControlBase>
  )
}

export default DateRangePicker