import React, { memo, useMemo } from 'react'
import styles from "./PortfolioNameArea.module.css"
import { ActionsIconDropDown } from '@core'
import { PopUpAction } from 'src/core/components/buttons/ActionsIconDropDown/types'

interface IPortfolioNameArea {
  name: string
  openTransactionsManagementModal: () => void
  openPortfolioRenameModal: () => void
  openPortfolioDeleteApprovalModal: () => void
}

const PortfolioNameArea = ({ 
  name,
  openTransactionsManagementModal,
  openPortfolioRenameModal,
  openPortfolioDeleteApprovalModal,
}: IPortfolioNameArea) => {

  const CORE_PORTFOLIO_ACTIONS: PopUpAction[] = useMemo(() => ([
    { title: "Manage transactions manually", actType: "manual", onClick: openTransactionsManagementModal },
    { title: "Rename", actType: "edit", onClick: openPortfolioRenameModal },
  ]), [openTransactionsManagementModal, openPortfolioRenameModal])

  const OTHER_PORTFOLIO_ACTIONS: PopUpAction[] = useMemo(() => ([
    { title: "Delete", actType: "delete", onClick: openPortfolioDeleteApprovalModal },
  ]), [openPortfolioDeleteApprovalModal])

  return (
    <section className='flex items-center'>
      <h2 className={styles.portfolio_name}>{name}</h2>
      <ActionsIconDropDown
        title="Profile menu"
        actions={CORE_PORTFOLIO_ACTIONS}
        bottomActions={OTHER_PORTFOLIO_ACTIONS}
      />
    </section>
  )
}

export default memo(PortfolioNameArea)