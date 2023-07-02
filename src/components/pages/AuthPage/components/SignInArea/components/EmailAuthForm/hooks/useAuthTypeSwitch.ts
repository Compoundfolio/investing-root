import { useState } from "react"
import { EmailAuthType } from "../types"

const useAuthTypeSwitch = () => {
  const [emailAuthType, setEmailAuthType] = useState<EmailAuthType>("signUp")

  const handleEmailAuthTypeChange = () => {
    setEmailAuthType(prev => prev === "signIn"
      ? "signUp"
      : "signIn"
    )
  }

  const authTypeSwitcherButtonName = emailAuthType === "signIn"
    ? "I don't have an account"
    : "I have an account"

  return {
    emailAuthType,
    authTypeSwitcherButtonName,
    handleEmailAuthTypeChange,
  }
}

export default useAuthTypeSwitch