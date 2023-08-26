"use client"

import React from "react"
import { ActButton } from "src/core/components/buttons"
import { useOpen } from "src/core/hooks"
import { Checkbox } from "src/core/client"
import { IReactChildren } from "src/core/types"

interface IActArea extends IReactChildren {
  isSureAgreement?: string
  closeModal: () => void
  callAction: () => void
}

const ActArea = ({
  children,
  isSureAgreement,
  callAction,
  closeModal,
}: IActArea) => {
  const [isUserSure, handleIsUserSure] = useOpen()

  const agreeToCallAction = () => {
    callAction()
    closeModal()
  }

  return (
    <>
      {children}
      {isSureAgreement && (
        <Checkbox
          name="portfolioDeleteAgreement"
          checked={isUserSure}
          description={isSureAgreement}
          withMb={false}
          onChange={handleIsUserSure}
        />
      )}
      <div className="flex gap-4">
        <ActButton
          onClick={agreeToCallAction}
          color="primary"
          width="200px"
          disabled={!isUserSure && !!isSureAgreement}
        >
          Save
        </ActButton>
        <ActButton onClick={closeModal} color="lowPrior" width="200px">
          Cancel
        </ActButton>
      </div>
    </>
  )
}

export default ActArea
