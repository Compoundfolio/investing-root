import React from "react"
import { AppLogo, colors } from "@core"
import styles from "./AuthPage.module.css"
import clsx from "clsx"
import { PresentativeArea, AuthArea } from "./components"

const AuthPage = () => {
  // TODO: Rid off using style
  return (
    <section className={clsx(styles.authContainer, "flex w-full h-full")}>
      <div
        className="z-10 flex flex-col flex-1 h-full"
        style={{ minHeight: "inherit" }}
      >
        <AppLogo className="absolute" />
        <AuthArea />
      </div>
      <div
        className="flex items-center justify-center w-20 h-full gradient"
        style={{ minHeight: "inherit", background: colors.lightGreen }}
      />
      <div
        className="z-10 flex items-center justify-center flex-1 h-full"
        style={{ minHeight: "inherit" }}
      >
        <PresentativeArea />
      </div>
    </section>
  )
}

export default AuthPage
