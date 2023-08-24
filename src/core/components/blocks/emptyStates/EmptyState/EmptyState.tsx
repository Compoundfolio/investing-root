import React, { ReactNode } from 'react'
import styles from './EmptyState.module.css'


interface IEmptyState {
  icon: ReactNode
  callToAction: ReactNode
  title: string
}

const EmptyState = ({
  icon,
  callToAction,
  title
}: IEmptyState) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      {icon}
      <span className={styles.emptyState_title}>{title}</span>
      <span className={styles.emptyState_callToAction}>{callToAction}</span>
    </div>
  )
}

export default EmptyState