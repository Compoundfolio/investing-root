import { ExanteIcon, FreedomFinanceIcon, Option, Portfolio, PortfolioBrokerage, SectionHead } from '@core'
import React, { memo, useCallback, useMemo } from 'react'
import { MultiAutocompleteInput } from 'src/core/client'
import { brokerageSelectionAreaDescription } from './consts'

// TODO: Rid of
const allPossibleOptions: Option[] = [
  { id: "fds222f", value: "Exante", label: "Exante", icon: <ExanteIcon size={16} /> },
  { id: "f4sf3243", value: "Freedom Finance", label: "Freedom Finance", icon: <FreedomFinanceIcon size={16} /> },
]

interface IBrokerageMultiSelector {
  selectedBrokerageOptions: PortfolioBrokerage[] | undefined
  setSelectedBrokerageOptions: React.Dispatch<React.SetStateAction<Portfolio | null>>
  selectionSideEffect: () => void
}

const BrokerageMultiSelector = ({
  selectedBrokerageOptions,
  setSelectedBrokerageOptions,
  selectionSideEffect,
}: IBrokerageMultiSelector) => {

  const selectedOptions: Option[] = useMemo(() => {
    const listOfSelectedBrokerageNames = selectedBrokerageOptions?.map(({ title }) => title)
    const selectedOptions = allPossibleOptions?.filter(({ value }) => listOfSelectedBrokerageNames?.includes(value))
    return selectedOptions
  }, [ selectedBrokerageOptions, allPossibleOptions ])

  const f = useCallback((options: Option[], isDelete: boolean) => {
    if (!options.length) {
      setSelectedBrokerageOptions(prev => ({ ...prev!, brokerages: [] }))
      return
    }

    const listOfSelectedBrokerageIds = options?.map(({ id }) => id)
    const newBrokerage: PortfolioBrokerage = {
      id: options?.at(-1)?.id!,
      title: options?.at(-1)?.value!,
      logoSrcLink: options?.at(-1)?.icon! as string,
      uploadedTransactionList: [],
    }

    console.log()

    setSelectedBrokerageOptions(prev => ({
      ...prev!,
      brokerages: prev?.brokerages
        ? isDelete
          ? prev?.brokerages.filter(brokerage => listOfSelectedBrokerageIds.includes(brokerage.id))!
          : [ ...prev?.brokerages, newBrokerage ]
        : [ newBrokerage ],
    }))
  }, [])


  return (
    <SectionHead
      title="Brokerages selection"
      dataVisDescription={brokerageSelectionAreaDescription}
    >
      <MultiAutocompleteInput
        erroringField={false}
        allPossibleOptions={allPossibleOptions}
        selectedOptions={selectedOptions}
        name="selectedBrokerages"
        placeholder="Search your brokerages"
        setSelectedOptions={f}
        selectionSideEffect={selectionSideEffect}
      />
    </SectionHead>
  )
}

export default memo(BrokerageMultiSelector)