import { memo } from 'react'
import { StyledPageName, StyledPortfolioName } from './styled'
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
        <StyledPageName>{title}</StyledPageName>
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
      <StyledPortfolioName>{portfolioName}</StyledPortfolioName>
    </div>
  )
}

export default memo(PageTitle)