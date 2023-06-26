import React from "react"
import { EmailAuthArea, GoogleAuthButton, OrDivider } from "./components"

const SignInArea = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-full"
      style={{ minHeight: "inherit" }}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-white">Welcome, investor!</h1>
          <small className="text-lg text-gray-400">Log in with Google</small>
        </div>
        <GoogleAuthButton />
        <OrDivider />
        <EmailAuthArea />
      </div>
    </section>
  )
}

export default SignInArea
