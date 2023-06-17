import { useState } from "react"
import { IInput } from '../Input';

interface IUsePassword {
  type: IInput['type']
}

const usePassword = ({
  type,
}: IUsePassword) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    // e.preventDefault()
    setIsPasswordVisible(prevState => !prevState)
  }

  const isPassword = type === "password"
  const activePasswordType = isPasswordVisible ? "text" : "password"

  return {
    isPasswordVisible,
    isPassword,
    activePasswordType,
    togglePasswordVisibility
  }
}

export default usePassword