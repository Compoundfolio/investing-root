"use client"

import React from "react"
import { EmailAuthForm, GoogleAuthButton, OrDivider } from "./components"
import { useAuthTypeSwitch } from "./hooks"
import styles from "./SignInArea.module.css"

// TODO: Make it server component somehow ???
const SignInArea = () => {
  const {
    authTitle,
    emailAuthType,
    authTypeSwitcherTitle,
    handleEmailAuthTypeChange,
  } = useAuthTypeSwitch()

  const formTitle =
    emailAuthType === "signIn" ? "Sign in to account" : "Create an account"

  return (
    <section
      className="z-20 flex flex-col items-center justify-center h-full"
      style={{ minHeight: "inherit" }}
    >
      <div className="flex flex-col items-center gap-10">
        <h1 className={styles.auth_title}>{formTitle}</h1>
        <div>
          <div className="flex flex-col justify-center flex-1 min-h-full">
            <div className="flex flex-col">
              <div className="flex justify-center w-full gap-3">
                <GoogleAuthButton />
              </div>
              <OrDivider authTitle={authTitle} />
              <EmailAuthForm
                emailAuthType={emailAuthType}
                authButtonTitle={authTitle}
                authTypeSwitcherTitle={authTypeSwitcherTitle}
                handleEmailAuthTypeChange={handleEmailAuthTypeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignInArea
