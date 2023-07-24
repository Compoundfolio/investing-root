"use client"

import React, { memo } from 'react'
import OptionsList from './components/OptionsList/OptionsList'

const MultiAutocompleteInput = () => {
  return (
    <div>
      <OptionsList />
    </div>
  )
}

export default memo(MultiAutocompleteInput)