import { IconButton } from '@mui/material'
import React, { memo } from 'react'
import { ICircleButton } from './types'

const CircleButton = ({
  children,
  onClick,
}: ICircleButton) => {
  return (
    <IconButton onClick={onClick} color="info">
      {children}
    </IconButton>
  )
}

export default memo(CircleButton)