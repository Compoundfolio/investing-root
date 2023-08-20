import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Option } from "src/core/types"
import { debouncedFetchData } from "./helpers"

export interface IUseSearch {
  serverSearchRequest: (searchValue: string) => Promise<Option[] | []>
  setIsOptionOpened: Dispatch<SetStateAction<boolean>>
}

export const useSearch = ({
  serverSearchRequest,
  setIsOptionOpened,
}: IUseSearch) => {
  const [ searchValue, setSearchValue ] = useState<string>("")
  const [ options, setOptions ] = useState<Option[]>([])
  const [ isSearching, setIsSearching ] = useState<boolean>(false)

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart()

    setSearchValue(value)

    if (!value) {
      setOptions([])
      setIsOptionOpened(false)
      return
    }

    debouncedFetchData(
      serverSearchRequest,
      value,
      res => {
        setOptions(res)
        setIsOptionOpened(true)
      },
      setIsSearching,
    )
  }

  const resetSearch = () => {
    setSearchValue("")
    setOptions([])
    setIsSearching(false)
    setIsOptionOpened(false)
  }

  return {
    isSearching,
    searchValue,
    searchOptions: options,
    handleSearchValueChange,
    resetSearch,
    setSearchValue,
  }
}

