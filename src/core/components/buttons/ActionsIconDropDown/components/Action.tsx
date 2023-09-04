import React from 'react'
import { PopUpAction } from '../types'
import { getActIcon } from './helpers'
import styles from "./Action.module.css"

interface IAction {
  action: PopUpAction
  closeModal: () => void
}

const Action = ({ 
  action: {
    icon,
    actType,
    title,
    onClick
  },
  closeModal,
}: IAction) => {

  const actIcon = icon ?? getActIcon(actType)

  const handleClick = () => {
    onClick()
    closeModal()
  }

  return (
    <button type='button' onClick={handleClick} className='flex items-center w-full gap-2 p-2'>
      <div className='flex w-[17.5px] h-[17.5px] items-center justify-center'>{actIcon}</div>
      <span className={styles.action_title}>{title}</span>
    </button>
  )
}

export default Action