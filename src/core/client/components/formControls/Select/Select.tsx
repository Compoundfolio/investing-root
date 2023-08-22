"use client"

import { memo, useCallback, useMemo } from "react"
import { Control, Option, UseFormHookHelpers, IReactChildren } from 'src/core/types';
import styles from "./Select.module.css"
import { FormControlBase } from "../FormControlBase"
import clsx from 'clsx';
import { useOpen } from 'src/core/hooks';
import { CollapseIcon } from "@core/components"
import { Input } from "../Input"
import { IUseSearch, useSearch } from "./hooks"

interface SelectType extends Omit<Control, "value" | "onChange" | "placeholder"> {
  value: Option
  options: Option[]
  search?: boolean
  setFieldValue: UseFormHookHelpers["setFieldValue"]
}

interface SearchType extends Omit<Control, "value" | "onChange" | "placeholder">, IReactChildren {
  search: boolean
  placeholder: string
  serverSearchRequest: IUseSearch['serverSearchRequest']
  onSearchSelection: (selectedOption: Option) => void
}

export type TSelect = SelectType & SearchType

// TODO: Overload

const Select = ({
  /** Makes select into autocomplete field */
  search = false,
  value,
  name,
  labelText,
  errorMessage,
  required = false,
  autofocus = false,
  helpText = "",
  withMb = true,
  options,
  placeholder,
  children,
  setFieldValue,
  setErrorMessage,
  serverSearchRequest,
  onSearchSelection,
  ...restProps
}: TSelect) => {
  const [isOptionOpened, handleOptionsOpenedChange, setIsOptionOpened] = useOpen()

  const {
    isSearching,
    searchValue,
    searchOptions,
    handleSearchValueChange,
    resetSearch,
    setSearchValue,
  } = useSearch({
    serverSearchRequest,
    setIsOptionOpened,
  })

  const handleChange = useCallback((option: Option) => {
    if (search) {
      setSearchValue(option.label)
      setFieldValue(name, option.label)
      onSearchSelection && onSearchSelection(option)
    } else {
      setFieldValue(name, option)
    }

    setIsOptionOpened(false)
  }, [search, isOptionOpened])

  const optionsList = searchOptions.length
    ? searchOptions
    : options

  const showOptions = search
    ? !isSearching && isOptionOpened
    : !!searchValue || isOptionOpened

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
      <div className={clsx("relative", !search && styles.select, isOptionOpened && styles.select_active)}>
        {search ? (
          <Input
            search={search}
            value={searchValue}
            name={name}
            onChange={handleSearchValueChange}
            placeholder={placeholder}
            isLoading={isSearching}
            resetInputValue={resetSearch}
            withMb={withMb}
            sharpBottomBorderRadius={showOptions}
          />
        ) : (
          <button type="button" onClick={handleOptionsOpenedChange} className={clsx("relative flex items-center justify-between w-full h-full gap-2 text-gray-900 cursor-default", styles.select_button)}>
            <span className="flex items-center">
              <span className="block truncate">{value.label}</span>
            </span>
            <CollapseIcon rotate180={showOptions} />
          </button>
        )}
        {showOptions && (
          <ul
            className={clsx(
              "absolute let-0 top-10 z-10 overflow-auto focus:outline-none",
              styles.select_optionList,
              search && styles.select_optionList__search
            )}
          >
            {!!optionsList.length ? optionsList.map((option) => (
              <li
                key={option.id}
              >
                <button
                  type="button"
                  className={clsx(
                    option.id === value?.id && styles.select_optionList_item__active,
                    'w-full relative select-none cursor-pointer',
                    styles.select_optionList_item
                  )}
                  onClick={() => handleChange(option)}
                >
                  {children ?? (
                    <span
                      className={clsx(option.id === value?.id ? 'font-semibold' : 'font-normal', 'block truncate')}
                    >
                      {option.label}
                    </span>
                  )}
                </button>
              </li>
            )) : (
              <li className={styles.select_optionList_nothingFoundMessage}>
                Nothing found 🤔
              </li>
            )}
          </ul>
        )}
      </div>
    </FormControlBase>
  )
}

export default memo(Select)