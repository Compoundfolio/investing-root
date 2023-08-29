import React from 'react'
import { Tab } from '../types'
import clsx from 'clsx';
import styles from './Tab.module.css'
import { minimalisticNumberRepresentation } from '@core/helpers';

interface ITab {
  tab: Tab
  isActive: boolean
}

const Tab = ({
  tab,
  isActive = false
}: ITab) => {

  const {
    title,
    onClick,
    entityAmount
  } = tab

  const amount = minimalisticNumberRepresentation(entityAmount!)

  return (
    <button
      className={clsx(
        styles.tabGroup_tab,
        isActive && styles.tabGroup_tab__active,
      )}
      onClick={() => onClick(title)}
    >
      <span>{title}</span>
      {typeof amount === "string" && (
        <div
          className={clsx(
            styles.tabGroup_tab_entityAmount,
            isActive && styles.tabGroup_tab__active_entityAmount,
          )}
        >
          {amount}
        </div>
      )}
    </button>
  )
}

export default Tab