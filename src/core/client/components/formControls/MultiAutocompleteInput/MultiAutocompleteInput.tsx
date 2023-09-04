"use client"

import React, { ChangeEvent, memo, useCallback, useState } from "react"
import OptionsList from "./components/OptionsList/OptionsList"
import { Input } from "../Input"
import { FormControlBase } from "../FormControlBase"
import { IMultiAutocompleteInput } from "./types"
import { Option } from "src/core/types"
import { removeObjectFromArrayOfObjects } from "@core/helpers"
import { useOpen } from "src/core/hooks"

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
  const [searchValue, setSearchValue] = useState<string>("")
  const [filteredOptionsBySearch, setFilteredOptionsBySearch] = useState<Option[]>(allPossibleOptions)
  const [isOptionsListMayOpen, _, setIsOptionsListMayOpen] = useOpen()

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setSearchValue(value)

    if (!value) {
      setFilteredOptionsBySearch(allPossibleOptions)
      return
    }

    setFilteredOptionsBySearch((prev) =>
      prev.filter((option) => {
        return option.label
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim())
      })
    )
  }

  const selectOption = useCallback(
    (option: Option, isDelete: boolean) => {
      if (
        (selectionSideEffect && selectedOptions.length === 0 && !isDelete) ||
        (selectedOptions.length === 1 && isDelete)
      ) {
        selectionSideEffect()
      }

      const options = isDelete
        ? removeObjectFromArrayOfObjects<Option>(selectedOptions, option, "id")
        : [...selectedOptions, option]

      setSelectedOptions(options, isDelete)
    },
    [selectedOptions]
  )

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
        onClick={() => setIsOptionsListMayOpen(true)}
        name={name}
      />
      {filteredOptionsBySearch && isOptionsListMayOpen && (
        <OptionsList
          options={filteredOptionsBySearch}
          selectedOptions={selectedOptions}
          selectOption={selectOption}
          closeOptionsList={() => setIsOptionsListMayOpen(false)}
        />
      )}
    </FormControlBase>
  )
}

export default memo(MultiAutocompleteInput)
