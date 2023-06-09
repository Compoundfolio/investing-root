import { NumberMaxi, NumberMini } from '@core'
import React, { memo } from 'react'
import styles from './NumbersBar.module.css'
import clsx from 'clsx';

const NumbersBar = () => {
  return (
    <aside className={clsx(styles.aside, 'flex flex-col gap-12')}>
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
        <div className={styles.statsGroup}>
          <NumberMini 
            title="Dividend yield"
            numbers="2.9%"
          />
          <NumberMini 
            title="Yield on Cost"
            numbers="5.15%"
          />
        </div>
        <div className={styles.statsGroup}>
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
        </div>
        <div className={styles.statsGroup}>
          <NumberMini 
            title="Beta"
            numbers="1.23"
          />
          <NumberMini 
            title="P/E"
            numbers="21.2"
          />
        </div>
      </section>
    </aside>
  )
}

export default memo(NumbersBar)