import { memo } from 'react'

interface IControlErrorMessage {
  errorMessage: string
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
      {errorMessage}
    </span>
  )
}

export default memo(ControlErrorMessage)