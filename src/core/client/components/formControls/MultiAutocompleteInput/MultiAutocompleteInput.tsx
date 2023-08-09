"use client"

import React, { ChangeEvent, memo, useCallback, useState } from 'react'
import OptionsList from './components/OptionsList/OptionsList'
import { Input } from '../Input'
import { FormControlBase } from '../FormControlBase'
import { IMultiAutocompleteInput } from './types'
import { Option } from 'src/core/types'
import { removeObjectFromArrayOfObjects } from '@core/helpers'

const MultiAutocompleteInput = ({
  selectedOptions,
  allPossibleOptions,
  name,
  placeholder,
  erroringField,
  setSelectedOptions,
  selectionSideEffect,
  className,
  ...restProps
}: IMultiAutocompleteInput) => {
  const [ searchValue, setSearchValue ] = useState<string>('')
  const [ filteredOptionsBySearch, setFilteredOptionsBySearch ] = useState<Option[]>(allPossibleOptions)

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setSearchValue(value)

    if (!value) {
      setFilteredOptionsBySearch(allPossibleOptions)
      return
    }

    setFilteredOptionsBySearch(prev => prev.filter(option => {
      return option.label.toLowerCase().trim().includes(
        value.toLowerCase().trim()
      )
    }))
  }

  const selectOption = useCallback((option: Option, isDelete: boolean) => {
    setSelectedOptions(prev => {
      if (
        selectionSideEffect &&
        (prev.length === 0 && !isDelete) ||
        (prev.length === 1 && isDelete)
      ) {
        selectionSideEffect()
      }

      return isDelete
        ? removeObjectFromArrayOfObjects<Option>(prev, option, "id")
        : [...prev, option]
    })
  }, [])

  return (
    <FormControlBase
      value={searchValue}
      name={name}
      erroringField={erroringField}
      className={className}
      {...restProps}
    >
      <Input
        value={searchValue}
        placeholder={placeholder}
        onChange={handleSearchChange}
        name={name}
      />
      {filteredOptionsBySearch && (
        <OptionsList
          options={filteredOptionsBySearch}
          selectedOptions={selectedOptions}
          selectOption={selectOption}
        />
      )}
    </FormControlBase>
  )
}

export default memo(MultiAutocompleteInput)