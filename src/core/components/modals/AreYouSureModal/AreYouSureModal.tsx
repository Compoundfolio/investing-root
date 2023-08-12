import React from 'react'
import { ModalBlur } from '../../blocks'
import { ActArea } from './components'

const AreYouSureModal = ({
  isOpen,
  title,
  children,
  handleModalOpenStatus,
}) => {
  return (
    <ModalBlur noMaxWidth={false} isOpen={isOpen} handleOpenChange={handleModalOpenStatus}>
      <div className='flex flex-col items-center gap-12'>
        <h2>{title}</h2>
        {children}
        <ActArea closeModal={handleModalOpenStatus} />
      </div>
    </ModalBlur>
  )
}

export default AreYouSureModal