"use client"

import React from 'react'
import { ActIcon, Divider, IReactChildren, PopUp, colors, useOpen } from '@core'
import CircleButton from '../CircleButton'
import { PopUpAction } from './types'
import { Action } from './components'
import styles from './ActionsIconDropDown.module.css'

interface IActionsIconDropDown extends IReactChildren {
  title: string
  actions: PopUpAction[]
  /**
   * Actions, which located at the bottom and separated via border.
   * Usually smth like delete or leave actions
  */
  bottomActions?: PopUpAction[]
}

const ActionsIconDropDown = ({ title, actions, bottomActions, children }: IActionsIconDropDown) => {
  const [ isShowPopUp, handleIsShowPopUp ] = useOpen()

  return (
    <div className='relative'>
      <CircleButton onClick={handleIsShowPopUp}>
        <ActIcon />
      </CircleButton>
      {isShowPopUp && (
        <PopUp widthFit noPadding className='left-11'>
          <section>
            <div className={styles.actionsIconDropDown_title}>{title}</div>
            <Divider color={colors.gray4C} />
            {actions.map(action => <Action action={action} />)}
            {bottomActions && <>
              <Divider color={colors.gray4C} />
              {bottomActions.map(bottomAction => <Action action={bottomAction} />)}
            </>}
          </section>
          {children}
        </PopUp>
      )}
    </div>
  )
}

export default ActionsIconDropDown