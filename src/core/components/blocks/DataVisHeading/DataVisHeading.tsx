import React from 'react'
import styles from './DataVisHeading.module.css'
import { DescriptionPopUp } from './components'
import { IReactChildren } from 'src/core/types'

export interface IDataVisHeading extends IReactChildren {
  title: string
  dataVisDescription: string
}

const DataVisHeading = ({ 
  title, 
  dataVisDescription,
  children,
  ...restProps
}: IDataVisHeading) => {
  return (
    <div {...restProps} className='flex items-center justify-between w-full gap-8'>
      <div className='flex items-center justify-between gap-4'>
        <span className={styles.title}>
          {title}
        </span>
        <DescriptionPopUp
          description={dataVisDescription} 
        />
      </div>
      <div className='flex items-center justify-end gap-4'>
        {children}
      </div>
    </div>
  )
}

export default DataVisHeading