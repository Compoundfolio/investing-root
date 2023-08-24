import React, { memo } from 'react'
import styles from "./PortfolioNameArea.module.css"
import { ActIcon } from '@core'

interface IPortfolioNameArea {
  name: string
}

const PortfolioNameArea = ({ name }: IPortfolioNameArea) => {
  return (
    <section className='flex items-center'>
      <h2 className={styles.portfolio_name}>{name}</h2>
      {/* <ActionsIconDropDown /> */}
      <ActIcon />
    </section>
  )
}

export default memo(PortfolioNameArea)