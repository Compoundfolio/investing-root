import React from 'react'
import { PopUpAction } from '../types'
import { getActIcon } from './helpers'
import styles from "./Action.module.css"

interface IAction {
  action: PopUpAction
}

const Action = ({ 
  action: {
    icon,
    actType,
    title,
    onClick
  },
}: IAction) => {

  const actIcon = icon ?? getActIcon(actType)

  return (
    <button type='button' onClick={onClick} className='flex items-center w-full gap-2 p-2'>
      {actIcon}
      <span className={styles.action_title}>{title}</span>
    </button>
  )
}

export default Action