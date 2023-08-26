"use client"

import React from 'react'
import TCell from '../TCell'
import CircleButton from 'src/core/components/buttons/CircleButton'
import { DeleteIcon, EditIcon } from 'src/core/components/icons'

interface IActionCell {
  onEdit: (tableItem: unknown) => void
  onDelete: (tableItem: unknown) => void
  tableItem: unknown
}

const ActionCell = ({
  onEdit,
  onDelete,
  tableItem,
}: IActionCell) => {
  return (
    <TCell className='flex items-center justify-center gap-1'>
      {onEdit && (
        <CircleButton onClick={() => onEdit(tableItem)}>
          <EditIcon isPartOfIconButton />
        </CircleButton>
      )}
      {onDelete && (
        <CircleButton onClick={() => onDelete(tableItem)} >
          <DeleteIcon isPartOfIconButton />
        </CircleButton>
      )}
    </TCell>
  )
}

export default ActionCell