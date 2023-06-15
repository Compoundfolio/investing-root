import { memo } from 'react'

interface ILabel {
  htmlFor: string
  labelText: string
  required?: boolean
}

const Label = ({
  htmlFor,
  labelText,
  required = false,
  ...rest
}: ILabel) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-white"
      {...rest}
    >
      {labelText} <span>{required ? " *" : " (Optional)"}</span>
    </label>
  )
}

export default memo(Label)