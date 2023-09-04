"use client"

import React, { useRef } from 'react'
import clsx from 'clsx';
import styles from './PopUp.module.css'
import { IReactChildren } from 'src/core/types';
import { useOverlayUiUnmountTriggers } from 'src/core/hooks';

interface IPopUp extends IReactChildren {
  showOnHover: true
  noPadding?: boolean
  widthFit?: boolean
  close?: () => void
}

interface IPopUpWhichHides extends Omit<IPopUp, 'showOnHover'> {
  showOnHover?: boolean
  close: () => void
}

const PopUp = ({
  children,
  showOnHover = false,
  noPadding = false,
  widthFit = false,
  className,
  close,
}: IPopUp | IPopUpWhichHides) => {
  const extraClasses = showOnHover && "hidden group-hover:block"

  const ref = useRef<HTMLDivElement>(null)

  useOverlayUiUnmountTriggers({ ref, hideOverlapComponent: close })

  return (
    <div
      ref={ref}
      className={clsx(
        `top-0 left-8 absolute w-96 transition`,
        extraClasses,
        className,
        styles.tooltipBlock,
        noPadding && styles.tooltipBlock_noPadding,
        widthFit && 'w-max'
      )}
    >
      {children}
    </div>
  )
}

export default PopUp