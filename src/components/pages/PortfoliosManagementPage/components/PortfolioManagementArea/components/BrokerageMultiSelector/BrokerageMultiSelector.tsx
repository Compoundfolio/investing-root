import { ExanteIcon, FreedomFinanceIcon, Option } from '@core'
import React from 'react'
import { MultiAutocompleteInput } from 'src/core/client'

// TODO: Rid of
const HARD_CODED_INITIAL_LIST: Option[] = [
  { id: "fds222f", value: "Exante", label: "Exante", icon: <ExanteIcon size={16} /> },
  { id: "f4sf324", value: "Freedom Finance", label: "Freedom Finance", icon: <FreedomFinanceIcon size={16} /> },
]

interface IBrokerageMultiSelector {
  selectedBrokerageOptions: Option[]
  setSelectedBrokerageOptions: React.Dispatch<React.SetStateAction<Option[]>>
  selectionSideEffect: () => void
}

const BrokerageMultiSelector = ({
  selectedBrokerageOptions,
  setSelectedBrokerageOptions,
  selectionSideEffect,
}: IBrokerageMultiSelector) => {
  return (
    <MultiAutocompleteInput
      erroringField={false}
      allPossibleOptions={HARD_CODED_INITIAL_LIST}
      selectedOptions={selectedBrokerageOptions}
      name="selectedBrokerages"
      placeholder="Search your brokerages"
      setSelectedOptions={setSelectedBrokerageOptions}
      selectionSideEffect={selectionSideEffect}
    />
  )
}

export default BrokerageMultiSelector