"use client"

import { useCallback, useState } from 'react'
import { Tab as TabType } from './types'
import { Tab } from './components'
import styles from './TabGroup.module.css'

interface ITabGroup {
  tabs: TabType[]
}

const TabGroup = ({ tabs }: ITabGroup) => {
  const [ activeTabTitle, setActiveTabTitle ] = useState<TabType['title']>(tabs[0].title)

  const handleTabClick = useCallback((tabTitle: string) => {
    setActiveTabTitle(tabTitle)
    tabs
      .find(tab => tab.title === tabTitle)
      ?.onClick()
  }, [tabs])

  return (
    <section className={styles.tabGroup}>
      {tabs.map(tab => (
        <Tab
          key={tab.title}
          tab={{...tab, onClick: handleTabClick}}
          isActive={activeTabTitle === tab.title}
        />
      ))}
    </section>
  )
}

export default TabGroup