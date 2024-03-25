import React from "react"
import { Select } from "src/core/client"
import { useState } from "react"
import { ROWS_PER_PAGE_OPTIONS } from "./const"
import { Option } from "src/core/types"
import { NavigationControls } from "./NavigationControls"

interface IPagination {
  tableRowsAmount: number
  defaultRowsPerPage?: number
}

const defaultRowsPerPageValue = ROWS_PER_PAGE_OPTIONS[0]

const Pagination = ({
  tableRowsAmount,
  defaultRowsPerPage = defaultRowsPerPageValue.value as number,
}: IPagination) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowsPerPage)
  const [lastVisibleRowNumberOption, setLastVisibleRowNumberOption] =
    useState<Option>(defaultRowsPerPageValue)

  const firstVisibleRowNumber =
    (lastVisibleRowNumberOption.value as number) - rowsPerPage + 1

  const locationDetails = `${firstVisibleRowNumber}-${lastVisibleRowNumberOption.value} of ${tableRowsAmount}`

  const handle = (_field: string, value: Option) => {
    setLastVisibleRowNumberOption(value)
  }

  return (
    <section>
      <div>
        <span>Rows per page</span>
        <Select
          value={lastVisibleRowNumberOption}
          options={ROWS_PER_PAGE_OPTIONS}
          search={false}
          setFieldValue={handle}
          name="tableRowsPerPage"
        />
      </div>
      <span>{locationDetails}</span>
      <NavigationControls setRowsPerPage={setRowsPerPage} />
    </section>
  )
}

export default Pagination
