import { NumberMaxi, NumberMini } from '@core'
import React, { memo } from 'react'
import { StyledAside } from './styled'

const NumbersBar = () => {
  return (
    <StyledAside className='flex flex-col gap-12'>
      <NumberMaxi
        title="Portfolio value"
        numbers={96592.03}
      />
      <NumberMaxi
        title="Annual dividends"
        numbers={7875.11}
      />
      <section>
        <div>
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
          />
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
          />
        </div>
        <div>
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
            sub="per year"
          />
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
            sub="per year"
          />
        </div>
        <div>
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
          />
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
          />
        </div>
      </section>
    </StyledAside>
  )
}

export default memo(NumbersBar)