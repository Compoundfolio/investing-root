import React, { memo } from "react"
import { Select } from "src/core/client"
import { useState } from "react"
import { ROWS_PER_PAGE_OPTIONS } from "./const"
import { Option } from "src/core/types"
import { NavigationControls } from "./NavigationControls"

interface IPagination {
  tableRowsAmount: number
  defaultRowsPerPageValue?: number
}

const defaultRowsPerPageValue = ROWS_PER_PAGE_OPTIONS[0]

// TODO: Hide pagination in case rows amount are less then ROWS_PER_PAGE_OPTIONS[0].value
const Pagination = ({ tableRowsAmount }: IPagination) => {
  const [rowsPerPageOption, setRowsPerPageOption] = useState<Option>(
    defaultRowsPerPageValue
  )
  const [lastVisibleRowNumber, setLastVisibleRowNumber] = useState<number>(
    defaultRowsPerPageValue.value as number
  )

  const rowsPerPage = rowsPerPageOption.value as number
  const firstVisibleRowNumber = lastVisibleRowNumber - rowsPerPage + 1

  const locationDetails = `${firstVisibleRowNumber}-${lastVisibleRowNumber} of ${tableRowsAmount}`

  const handleTableRowsPerPageChange = (_field: string, value: Option) => {
    setRowsPerPageOption(value)
  }

  return tableRowsAmount > rowsPerPage ? (
    <section className="flex items-center gap-8 transition duration-150 ease-in-out">
      <div className="flex items-center gap-4">
        <span>Rows per page</span>
        <Select
          value={rowsPerPageOption}
          options={ROWS_PER_PAGE_OPTIONS}
          search={false}
          name="tableRowsPerPage"
          setFieldValue={handleTableRowsPerPageChange}
        />
      </div>
      <span>{locationDetails}</span>
      <NavigationControls
        tableRowsPerPage={rowsPerPage}
        tableRowsAmount={tableRowsAmount}
        firstVisibleRowNumber={firstVisibleRowNumber}
        lastVisibleRowNumber={lastVisibleRowNumber}
        setLastVisibleRowNumber={setLastVisibleRowNumber}
      />
    </section>
  ) : null
}

export default memo(Pagination)
