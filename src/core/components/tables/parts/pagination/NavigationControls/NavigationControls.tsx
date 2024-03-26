import React, { memo, useCallback, useEffect, useState } from "react"
import PaginationNavigation from "./icons"
import { SquareButton } from "src/core/components/buttons"

interface INavigationControls {
  tableRowsPerPage: number
  tableRowsAmount: number
  firstVisibleRowNumber: number
  lastVisibleRowNumber: number
  setLastVisibleRowNumber: React.Dispatch<React.SetStateAction<number>>
}

const NavigationControls = ({
  tableRowsPerPage,
  tableRowsAmount,
  firstVisibleRowNumber,
  lastVisibleRowNumber,
  setLastVisibleRowNumber,
}: INavigationControls) => {
  const [isForwardDisabled, setIsForwardDisabled] = useState<boolean>(false)
  const [isBackDisabled, setIsBackDisabled] = useState<boolean>(false)
  const [isBeginningDisabled, setIsBeginningDisabled] = useState<boolean>(false)
  const [isEndDisabled, setIsEndDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (lastVisibleRowNumber === tableRowsPerPage) {
      !isForwardDisabled && setIsForwardDisabled(true)
      !isEndDisabled && setIsEndDisabled(true)
    } else {
      isForwardDisabled && setIsForwardDisabled(false)
      isEndDisabled && setIsEndDisabled(false)
    }

    if (firstVisibleRowNumber === 1) {
      !isBackDisabled && setIsBackDisabled(true)
      !isBeginningDisabled && setIsBeginningDisabled(true)
    } else {
      isBackDisabled && setIsBackDisabled(false)
      isBeginningDisabled && setIsBeginningDisabled(false)
    }
  }, [lastVisibleRowNumber, firstVisibleRowNumber, tableRowsPerPage])

  const handleForward = useCallback(() => {
    setLastVisibleRowNumber((prev) => prev + tableRowsPerPage)
  }, [tableRowsPerPage])

  const handleBack = useCallback(() => {
    setLastVisibleRowNumber((prev) => prev - tableRowsPerPage)
  }, [tableRowsPerPage])

  const handleBeginning = useCallback(() => {
    setLastVisibleRowNumber(tableRowsPerPage)
  }, [tableRowsPerPage])

  const handleEnd = useCallback(() => {
    setLastVisibleRowNumber(tableRowsAmount)
  }, [tableRowsAmount])

  return (
    <div className="flex items-center">
      <SquareButton onClick={handleBeginning} disabled={isBeginningDisabled}>
        <PaginationNavigation.GoToBeginningIcon />
      </SquareButton>
      <SquareButton onClick={handleBack} disabled={isBackDisabled}>
        <PaginationNavigation.GoBackIcon />
      </SquareButton>
      <SquareButton onClick={handleForward} disabled={isForwardDisabled}>
        <PaginationNavigation.GoForwardIcon />
      </SquareButton>
      <SquareButton onClick={handleEnd} disabled={isEndDisabled}>
        <PaginationNavigation.GoToTheEndIcon />
      </SquareButton>
    </div>
  )
}

export default memo(NavigationControls)
