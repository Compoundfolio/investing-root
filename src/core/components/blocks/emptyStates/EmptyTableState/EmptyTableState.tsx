import React from 'react'
import { colors } from 'src/core/theme'
import EmptyState from '../EmptyState'
import EmptyTableStateIcon from './icon'

const EmptyTableState = () => {
  return (
    <section
      className='flex items-center justify-center w-full p-20 text-gray-400'
      style={{
        borderTop: `1px ${colors.gray4C} solid`,
        borderBottom: `1px ${colors.gray4C} solid`,
      }}
    >
      <EmptyState
        icon={<EmptyTableStateIcon />}
        title="Portfolio doesn't have transactions"
        callToAction={<>
          You may to <b>add transactions manually </b>
          or <b>upload brokerage report</b>
        </>}
      />
    </section>
  )
}

export default EmptyTableState