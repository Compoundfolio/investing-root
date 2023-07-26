"use client"

import React, { useEffect } from 'react'
import { useFadeInOutMountAnimation, useOpen } from 'src/core/hooks'
import { IReactChildren } from 'src/core/types'
import { CollapseIcon } from '../../icons'
import style from "./Collapsible.module.css"
import clsx from 'clsx';

interface ICollapsible extends IReactChildren {
  openByDefault?: boolean
  title: Required<IReactChildren['title']>
}

const Collapsible = ({
  openByDefault = false,
  title,
  children,
}: ICollapsible) => {

  const [ isOpen, handleOpenChange ] = useOpen(openByDefault)

  // const {
  //   shouldRenderChild,
  //   contentAnimation,
  //   causeContentFadeEffect,
  // } = useFadeInOutMountAnimation()

  // useEffect(() => {
  //   causeContentFadeEffect()
  // }, [isOpen])

  return (
    <article className='flex flex-col w-full'>
      <button
        className={clsx(style.collapsible__triggerButton, 'flex items-center justify-between w-full')}
        onClick={handleOpenChange}
      >
        {title}
        <CollapseIcon rotate180={!isOpen} />
      </button>
      {/* {shouldRenderChild && (
        <div style={contentAnimation}>
          {children}
        </div>
      )} */}
      {isOpen && (
        <div className={style.collapsible__contentWrapper}>
          {children}
        </div>
      )}
    </article>
  )
}

export default Collapsible