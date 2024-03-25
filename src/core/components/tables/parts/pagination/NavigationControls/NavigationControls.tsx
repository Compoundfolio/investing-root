import React, { memo } from "react"
import PaginationNavigation from "./icons"
import { SquareButton } from "src/core/components/buttons"

interface INavigationControls {
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>
}

const NavigationControls = ({ setRowsPerPage }: INavigationControls) => {
  return (
    <div>
      <SquareButton>
        <PaginationNavigation.GoToBeginningIcon />
      </SquareButton>
      <SquareButton>
        <PaginationNavigation.GoBackIcon />
      </SquareButton>
      <SquareButton>
        <PaginationNavigation.GoForwardIcon />
      </SquareButton>
      <SquareButton>
        <PaginationNavigation.GoToTheEndIcon />
      </SquareButton>
    </div>
  )
}

export default memo(NavigationControls)
