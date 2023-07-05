"use client"

import React from "react"
import { EmailAuthForm, GoogleAuthButton, OrDivider } from "./components"
import { useAuthTypeSwitch } from "./hooks"
import { colors } from "src/core/theme"

// TODO: Make it server component somehow ???
const SignInArea = () => {
  const {
    authTitle,
    emailAuthType,
    authTypeSwitcherTitle,
    handleEmailAuthTypeChange,
  } = useAuthTypeSwitch()

  return (
    <section
      className="flex flex-col items-center justify-center h-full"
      style={{ minHeight: "inherit" }}
    >
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl text-center text-white mb-">
          {emailAuthType === "signIn"
            ? "Sign in to account"
            : "Create an account"}
        </h1>
        <div>
          <div className="flex flex-col justify-center flex-1 min-h-full">
            <div className="flex flex-col gap-2 sm:mx-auto sm:w-full sm:max-w-sm">
              <EmailAuthForm
                emailAuthType={emailAuthType}
                authButtonTitle={authTitle}
              />
              <OrDivider authTitle={authTitle} />
              <div className="flex justify-center w-full gap-3">
                <GoogleAuthButton />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-white text-md">{authTypeSwitcherTitle}</span>
          <button
            className="text-lg underline"
            style={{ color: colors.darkGreen }}
            onClick={handleEmailAuthTypeChange}
          >
            {emailAuthType === "signIn" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default SignInArea
