import { NumberMaxi, NumberMini } from '@core'
import React, { memo } from 'react'
import { StatsGroup, StyledAside } from './styled'

const NumbersBar = () => {
  return (
    <StyledAside className='flex flex-col gap-12'>
      <NumberMaxi
        title="Portfolio value"
        numbers={96592.03}
        curency="$"
      />
      <NumberMaxi
        title="Annual dividends"
        numbers={7875.11}
        curency="$"
      />
      <section className='flex flex-col gap-16'>
        <StatsGroup>
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
          />
          <NumberMini 
            title="Yield on Cost"
            numbers="5.15%"
          />
        </StatsGroup>
        <StatsGroup>
          <NumberMini 
            title="Avg. price return"
            numbers="7.9%"
            sub="per year"
          />
          <NumberMini 
            title="Total return"
            numbers="2.9%"
            sub="per year"
          />
        </StatsGroup>
        <StatsGroup>
          <NumberMini 
            title="Beta"
            numbers="2.9%"
          />
          <NumberMini 
            title="P/E"
            numbers="2.9%"
          />
        </StatsGroup>
      </section>
    </StyledAside>
  )
}

export default memo(NumbersBar)