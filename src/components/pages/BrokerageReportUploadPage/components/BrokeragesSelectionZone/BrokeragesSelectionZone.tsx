"use client"

import React, { memo } from 'react'
import { SupportedBrokerage } from '../../consts'
import { SelectableBrokerage } from './components'
import { AppLogo } from 'src/core/components/icons'
import { useSelectedBrokeragesStore } from '../../stores'
import styles from './BrokeragesSelectionZone.module.css'
import { ExanteBrokerage } from "src/inversions";

export default memo(function BrokeragesSelectionZone() {
  const { 
    isSelected, 
    handleUpdateSelectedBrokerages 
  } = useSelectedBrokeragesStore()  

  return (
    <section className={styles.selection__container}>
      <AppLogo withTitle />
      {/* TODO: Fix this */}
      {[ExanteBrokerage].map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage 
          key={Brokerage.brandName}
          Brokerage={Brokerage} 
          isSelected={isSelected(Brokerage)}
          handleUpdateSelectedBrokerages={handleUpdateSelectedBrokerages}
        />
      ))}
      {/* * TODO: HelpLegend */}
      <div></div>
    </section>
  )
})
