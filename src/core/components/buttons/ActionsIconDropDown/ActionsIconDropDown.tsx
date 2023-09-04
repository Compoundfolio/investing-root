"use client"

import React, { useCallback } from 'react'
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
  const [isShowPopUp, handleIsShowPopUp, setIsShowPopUp] = useOpen()

  const closeModal = useCallback(() => {
    setIsShowPopUp(false)
  }, [])

  return (
    <div className='relative'>
      <CircleButton onClick={handleIsShowPopUp}>
        <ActIcon />
      </CircleButton>
      {isShowPopUp && (
        <PopUp
          widthFit
          noPadding
          className='left-10'
          close={closeModal}
        >
          <section>
            <div className={styles.actionsIconDropDown_title}>
              {title}
            </div>
            <Divider color={colors.gray4C} />
            {actions.map(action => (
              <Action
                key={action.title}
                action={action}
                closeModal={closeModal}
              />
            ))}
            {bottomActions && <>
              <Divider color={colors.gray4C} />
              {bottomActions.map(bottomAction => (
                <Action
                  key={bottomAction.title}
                  action={bottomAction}
                  closeModal={closeModal}
                />
              ))}
            </>}
          </section>
          {children}
        </PopUp>
      )}
    </div>
  )
}

export default ActionsIconDropDown