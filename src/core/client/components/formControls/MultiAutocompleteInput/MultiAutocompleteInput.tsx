"use client"

import React, { ChangeEvent, ChangeEventHandler, memo, useCallback, useState } from 'react'
import OptionsList from './components/OptionsList/OptionsList'
import { Input } from '../Input'
import { FormControlBase } from '../FormControlBase'
import { IMultiAutocompleteInput } from './types'
import { Option } from 'src/core/types'
import { removeObjectFromArrayOfObjects } from '@core/helpers'

const MultiAutocompleteInput = ({
  selectedOptions,
  options,
  name,
  placeholder,
  setSelectedOptions,
  setOptions,
}: IMultiAutocompleteInput) => {
  const [ searchValue, setSearchValue ] = useState<string>('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setOptions(prev => prev.filter(option => option.label.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const selectOption = useCallback((option: Option, isDelete: boolean) => {
    setSelectedOptions(prev => isDelete
      ? removeObjectFromArrayOfObjects<Option>(prev, option, "id")
      : [...prev, option]
    )
  }, [])

  return (
    <FormControlBase
      value={searchValue}
      name={name}
      erroringField={false}
    >
      <Input
        value={searchValue}
        placeholder={placeholder}
        onChange={handleSearchChange}
        name={name}
      />
      {options}
      <OptionsList
        options={options}
        selectedOptions={selectedOptions}
        selectOption={selectOption}
      />
    </FormControlBase>
  )
}

export default memo(MultiAutocompleteInput)