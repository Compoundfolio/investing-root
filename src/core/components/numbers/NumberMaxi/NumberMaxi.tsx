import React, { memo } from 'react'
import { INumberMaxi } from './types'

const NumberMaxi = ({
  title,
  numbers,
  curency,
  gainNumber,
}: INumberMaxi) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{curency && curency} {numbers}</p>
      <span>{gainNumber}</span>
    </div>
  )
}

export default memo(NumberMaxi)