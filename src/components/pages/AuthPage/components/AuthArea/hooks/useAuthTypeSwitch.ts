import { useState } from "react"
import { EmailAuthType } from "../types"

const useAuthTypeSwitch = () => {
  const [emailAuthType, setEmailAuthType] = useState<EmailAuthType>("signUp")

  const handleEmailAuthTypeChange = () => {
    setEmailAuthType((prev) => (prev === "signIn" ? "signUp" : "signIn"))
  }

  const authTypeSwitcherTitle =
    emailAuthType === "signIn"
      ? "Already have an account?"
      : "Don't have an account?"

  const authTitle = emailAuthType === "signIn" ? "Sign in" : "Sign up"

  return {
    authTitle,
    emailAuthType,
    authTypeSwitcherTitle,
    handleEmailAuthTypeChange,
  }
}

export default useAuthTypeSwitch
