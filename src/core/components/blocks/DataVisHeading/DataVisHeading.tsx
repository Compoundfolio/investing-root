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
    <div {...restProps} className='flex flex-col w-full gap-[22px]'>
      <div className='flex items-center gap-4'>
        <span className={styles.title}>
          {title}
        </span>
        <DescriptionPopUp
          description={dataVisDescription} 
        />
      </div>
      <div className='flex flex-col'>
        {children}
      </div>
    </div>
  )
}

export default DataVisHeading