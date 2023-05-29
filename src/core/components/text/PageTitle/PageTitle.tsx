import { memo } from 'react'
import styles from './PageTitle.module.css'
import Image from 'next/image'

interface IPageTitle {
  title: string
  portfolioName: string
  brokeragesIconLinks?: string[]
}

const PageTitle = ({
  title,
  portfolioName,
  brokeragesIconLinks,
}: IPageTitle) => {
  return (
    <div>
      <div className='flex items-center'>
        <h1 className={styles.pageName}>{title}</h1>
        {brokeragesIconLinks && (
          <div className='flex items-center gap-1'>
            {brokeragesIconLinks.map(link => (
              <Image 
                key={link}
                src={link} 
                width={32} 
                height={32} 
                alt='Brokerage icon' 
              />
            ))}
          </div>
        )}
      </div>
      <span className={styles.portfolioName}>{portfolioName}</span>
    </div>
  )
}

export default memo(PageTitle)