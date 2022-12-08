import React, { memo } from 'react'
import { INumberMini } from './types'

const NumberMini = ({
  title,
  numbers,
  sub,
}: INumberMini) => {
  return (
    <div>
      <h6>{title}</h6>
      <p>{numbers}</p>
      {sub && <span>{sub}</span>}
    </div>
  )
}

export default memo(NumberMini)