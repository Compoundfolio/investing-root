import React, { useEffect } from 'react'

// TODO: Make stuff ultra-reusable

interface IInput {
  value: string
  name: string
  labelText: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  onChange: () => void
  setErrorMessage?: (message: string) => void
}

const Input = ({
  value,
  name,
  labelText,
  placeholder,
  errorMessage,
  required = false,
  onChange,
  setErrorMessage,
  ...restProps
}: IInput) => {

  useEffect(() => {
    if (value && setErrorMessage) {
      setErrorMessage('')
    }
  }, [value])
  
  return (
    <div className="relative mb-10" {...restProps}>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-white">
        {labelText}
      </label>
      <div className="mt-2">
        <input
          value={value}
          id={name}
          name={name}
          type={name}
          autoComplete={name}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset "
        />
      </div>
      {errorMessage && (
        <span className="absolute left-0 text-sm font-medium leading-6 text-red-600 -bottom-8">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Input