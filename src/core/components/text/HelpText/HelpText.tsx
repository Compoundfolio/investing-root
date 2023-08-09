import React from 'react'

interface IHelpText {
  helpText: string
}

const HelpText = ({
  helpText,
}: IHelpText) => {
  return (
    <span className='mt-2 text-xs color-gray4C'>{helpText}</span>
  )
}

export default HelpText