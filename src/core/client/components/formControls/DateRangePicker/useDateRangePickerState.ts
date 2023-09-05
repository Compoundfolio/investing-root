"use client"

import { useState } from "react"
import { DateValueType } from "react-tailwindcss-datepicker"

const useDateRangePickerState = () => {
  const [ value, setValue ] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  })

  const handleDateRangeChange = (dateRange: DateValueType) => {
    setValue(dateRange)
  }

  return {
    dateRangeValue: value,
    handleDateRangeChange
  }
}

export default useDateRangePickerState