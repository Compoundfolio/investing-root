"use client"

import { Option } from '@core'
import React, { useState } from 'react'
import { MultiAutocompleteInput } from 'src/core/client'

const BrokerageMultiSelector = () => {
  const [ brokerageOptions, setBrokerageOptions ] = useState<Option[]>([])
  const [ selectedOptions, setSelectedOptions ] = useState<Option[]>([])

  const HARD_CODE: Option[] = [
    { id: "fds222f", value: "Exante", label: "Exante" },
    { id: "f4sf324", value: "Freedom Finance", label: "Freedom Finance" },
  ]

  return (
    <MultiAutocompleteInput
      selectedOptions={selectedOptions}
      options={HARD_CODE}
      name="selectedBrokerages"
      placeholder={"Search your brokerages"}
      setSelectedOptions={setSelectedOptions}
    />
  )
}

export default BrokerageMultiSelector