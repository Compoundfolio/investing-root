import React from 'react'
import clsx from 'clsx';
import styles from './PopUp.module.css'
import { IReactChildren } from 'src/core/types';

interface IPopUp extends IReactChildren {
  showOnHover?: boolean
  noPadding?: boolean
  widthFit?: boolean
}

const PopUp = ({
  children,
  showOnHover = false,
  noPadding = false,
  widthFit = false,
  className,
}: IPopUp) => {
  const extraClasses = showOnHover && "hidden group-hover:block"

  return (
    <div
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