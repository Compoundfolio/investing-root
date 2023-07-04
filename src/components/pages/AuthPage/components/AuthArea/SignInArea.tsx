"use client"

import React from "react"
import { EmailAuthForm, GoogleAuthButton, OrDivider } from "./components"
import { useAuthTypeSwitch } from "./hooks"

// TODO: Make it server component somehow ???
const SignInArea = () => {
  const {
    authTitle,
    emailAuthType,
    authTypeSwitcherButtonName,
    handleEmailAuthTypeChange,
  } = useAuthTypeSwitch()

  return (
    <section
      className="flex flex-col items-center justify-center h-full"
      style={{ minHeight: "inherit" }}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-white">Welcome, investor!</h1>
          <small className="text-lg text-gray-400">{authTitle} with</small>
        </div>
        <GoogleAuthButton authTypeTitle={authTitle} />
        <OrDivider />
        <div>
          <div className="flex flex-col justify-center flex-1 min-h-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <EmailAuthForm
                emailAuthType={emailAuthType}
                authButtonTitle={authTitle}
              />
            </div>
          </div>
        </div>
        <button onClick={handleEmailAuthTypeChange}>
          {authTypeSwitcherButtonName}
        </button>
      </div>
    </section>
  )
}

export default SignInArea
