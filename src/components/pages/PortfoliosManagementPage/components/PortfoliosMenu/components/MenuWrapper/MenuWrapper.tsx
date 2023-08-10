"use client"

import React, { memo } from 'react'
import { IReactChildren } from 'src/core/types';
import { usePortfolioManagerContext } from '../../../../context/PortfolioManagerContextData';
import PlateAddButton from '../PlateAddButton';

const MenuWrapper = ({ children }: IReactChildren) => {

  const { portfolioList } = usePortfolioManagerContext()

  const containerClasses = portfolioList.length
    ? 'flex items-center w-full gap-8'
    : 'flex items-center w-full h-full justify-center'

  return (
    <section className={containerClasses}>
      <PlateAddButton
        title='Create Portfolio'
      />
      {!!portfolioList.length && children}
    </section>
  )
}

export default memo(MenuWrapper)