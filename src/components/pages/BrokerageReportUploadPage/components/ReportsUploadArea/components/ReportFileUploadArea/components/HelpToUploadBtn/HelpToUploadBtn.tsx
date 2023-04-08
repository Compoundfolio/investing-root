import { ModalBlur } from '@core'
import React from 'react'
import { useOpen } from 'src/core/hooks';

const HelpToUploadBtn = () => {

  const [ isModalOpen, handleIsModalOpen ] = useOpen()

  return (
    <div>
      {/* TODO: Mb it don't needs to be modal??? */}
      <button onClick={handleIsModalOpen}>Where to take the report?</button>
      <ModalBlur
        isOpen={isModalOpen}
        handleOpenChange={handleIsModalOpen}
      >
        TODO: Guidance
      </ModalBlur>
    </div>
  )
}

export default HelpToUploadBtn