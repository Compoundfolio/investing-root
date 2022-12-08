import { NumberMaxi, NumberMini } from '@core'
import React, { memo } from 'react'

const NumbersBar = () => {
  return (
    <aside>
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
    </aside>
  )
}

export default memo(NumbersBar)