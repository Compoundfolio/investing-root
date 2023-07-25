"use client"

import { Option } from '@core'
import React, { useState } from 'react'
import { MultiAutocompleteInput } from 'src/core/client'

// TODO: Rid of
const HARD_CODED_INITIAL_LIST: Option[] = [
  { id: "fds222f", value: "Exante", label: "Exante" },
  { id: "f4sf324", value: "Freedom Finance", label: "Freedom Finance" },
]

const BrokerageMultiSelector = () => {
  const [ selectedOptions, setSelectedOptions ] = useState<Option[]>([])

  return (
    <MultiAutocompleteInput
      erroringField={false}
      // TODO: Rid of
      style={{ width: 300 }}
      allPossibleOptions={HARD_CODED_INITIAL_LIST}
      selectedOptions={selectedOptions}
      name="selectedBrokerages"
      placeholder="Search your brokerages"
      setSelectedOptions={setSelectedOptions}
    />
  )
}

export default BrokerageMultiSelector