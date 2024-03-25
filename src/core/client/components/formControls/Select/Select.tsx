"use client"

import { ChangeEvent, memo, useCallback } from "react"
import {
  Control,
  Option,
  UseFormHookHelpers,
  IReactChildren,
} from "src/core/types"
import styles from "./Select.module.css"
import { FormControlBase } from "../FormControlBase"
import clsx from "clsx"
import { useOpen } from "src/core/hooks"
import { CollapseIcon } from "@core/components"
import { Input } from "../Input"
import { IUseSearch, useSearch } from "./hooks"
import { colors } from "src/core/theme"
import { SearchAssetOption } from "src/core/components/massiveViews/TransactionsManagementView/components/TransactionForm/components"
import { AssetSearchOptionData } from "src/core/components/massiveViews/TransactionsManagementView/components/TransactionForm/hooks"

interface SelectType
  extends Omit<Control, "value" | "onChange" | "placeholder"> {
  value: Option
  options: Option[]
  search?: boolean
  assetAsOption?: boolean
  setFieldValue:
    | UseFormHookHelpers["setFieldValue"]
    | ((field: string, value: any) => void)
}

interface SearchType
  extends Omit<Control, "value" | "onChange" | "placeholder">,
    IReactChildren {
  search: boolean
  placeholder?: string
  serverSearchRequest?: IUseSearch["serverSearchRequest"]
  onSearchSelection?: (selectedOption: Option) => void
}

export type TSelect = SelectType & SearchType

const Select = ({
  /** Makes select into autocomplete field */
  search = false,
  required = false,
  autofocus = false,
  withMb = true,
  helpText = "",
  placeholder = "",
  value,
  name,
  labelText,
  errorMessage,
  options,
  assetAsOption,
  children,
  setFieldValue,
  setErrorMessage,
  serverSearchRequest,
  onSearchSelection,
  ...restProps
}: TSelect) => {
  const [isOptionOpened, handleOptionsOpenedChange, setIsOptionOpened] =
    useOpen()

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

  const handleChange = useCallback(
    (option: Option) => {
      if (search) {
        setSearchValue(option.label)
        setFieldValue(name, option.label)
        onSearchSelection && onSearchSelection(option)
      } else {
        setFieldValue(name, option)
      }

      setIsOptionOpened(false)
    },
    [search, isOptionOpened]
  )

  const handleOpenOptionList = () => {
    setIsOptionOpened(true)
  }

  const optionsList = (searchOptions.length ? searchOptions : options) ?? []

  const showOptions = search
    ? !isSearching && isOptionOpened
    : !!searchValue || isOptionOpened

  const emptyDataMessage =
    search && !searchValue ? "Start searching 🔍" : "Nothing found 🤔"

  return (
    <FormControlBase
      required={required}
      value={value}
      name={name}
      labelText={labelText}
      helpText={helpText}
      withMb={withMb}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      {...restProps}
    >
      <div
        className={clsx(
          "relative my-2",
          !search && styles.select,
          isOptionOpened && styles.select_active
        )}
      >
        {search ? (
          <Input
            // TODO: Make style reusable for all form controls
            style={{
              ...(errorMessage && { borderColor: colors.pinkSoft }),
            }}
            search={search}
            value={searchValue}
            name={name}
            withMb={withMb}
            sharpBottomBorderRadius={showOptions}
            placeholder={placeholder}
            isLoading={isSearching}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSearchValueChange(e, optionsList.length)
            }
            resetInputValue={resetSearch}
            onClick={handleOpenOptionList}
          />
        ) : (
          <button
            type="button"
            onClick={handleOptionsOpenedChange}
            className={clsx(
              "relative flex items-center justify-between w-full gap-2 text-gray-900 h-[39px] cursor-default",
              styles.select_button
            )}
          >
            <span className="flex items-center gap-2">
              {value?.icon?.()}
              <span className="block truncate">{value?.label}</span>
            </span>
            <CollapseIcon rotate180={showOptions} />
          </button>
        )}
        {showOptions && !isSearching && (
          <ul
            className={clsx(
              "absolute let-0 top-10 z-10 overflow-auto focus:outline-none",
              styles.select_optionList,
              search && styles.select_optionList__search
            )}
          >
            {!!optionsList?.length ? (
              optionsList?.map((option) => (
                <li key={option.id}>
                  <button
                    type="button"
                    className={clsx(
                      option.id === value?.id &&
                        styles.select_optionList_item__active,
                      "w-full relative select-none cursor-pointer",
                      styles.select_optionList_item
                    )}
                    onClick={() => handleChange(option)}
                  >
                    {/* TODO: Refactor, abstract */}
                    {children ?? assetAsOption ? (
                      <SearchAssetOption
                        asset={{
                          ...(option.data as AssetSearchOptionData),
                          icon: option?.icon?.(24),
                        }}
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        {option?.icon?.()}
                        <span
                          className={clsx(
                            option.id === value?.id
                              ? "font-semibold"
                              : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option.label}
                        </span>
                      </div>
                    )}
                  </button>
                </li>
              ))
            ) : (
              <li className={styles.select_optionList_nothingFoundMessage}>
                {emptyDataMessage}
              </li>
            )}
          </ul>
        )}
      </div>
    </FormControlBase>
  )
}

export default memo(Select)
