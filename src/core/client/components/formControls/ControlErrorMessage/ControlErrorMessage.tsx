import { memo } from 'react'
import { UseFormHookError } from 'src/core/types'

interface IControlErrorMessage {
  errorMessage: UseFormHookError
}

const ControlErrorMessage = ({
  errorMessage,
  ...rest
}: IControlErrorMessage) => {
  return (
    <span 
      className="absolute left-0 text-sm font-medium leading-6 text-red-600 -bottom-8" 
      {...rest}
    >
      {errorMessage as string}
    </span>
  )
}

export default memo(ControlErrorMessage)