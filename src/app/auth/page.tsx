import { Metadata } from "next"
import React from "react"
import AuthPage from "src/components/pages/AuthPage/AuthPage"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Start to manage your investments!",
}

const SignIn = () => {
  return <AuthPage />
}

export default SignIn
