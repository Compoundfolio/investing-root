import React from "react"
import { AppLogo } from "@core"
import styles from "./AuthPage.module.css"
import clsx from "clsx"
import { AuthArea } from "./components"
import Image from "next/image"
import { ShadowLeft, ShadowRight } from "./shadows"

const AuthPage = () => {
  // TODO: Ride of using style
  return (
    <section className={clsx(styles.authContainer, "flex w-full h-full")}>
      <div className="relative z-10 flex flex-col items-center flex-1 w-full h-full gap-10">
        <ShadowLeft />
        <AppLogo withTitle className="z-20" />
        <AuthArea />
        <ShadowRight />
      </div>
      <Image
        width={1000}
        height={500}
        src="/img/authPage/globePart.png"
        alt="Globe image"
        className={clsx(styles.authContainer_globeImg, "absolute bottom-0 left-0 right-0 m-auto")}
      />
    </section>
  )
}

export default AuthPage
