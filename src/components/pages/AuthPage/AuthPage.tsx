import React from "react"
import { AppLogo } from "@core"
import styles from "./AuthPage.module.css"
import clsx from "clsx"
import Image from "next/image"
import { ShadowLeft, ShadowRight } from "./shadows"
import Content from "./Content"

const AuthPage = () => {
  return (
    <>
      <section className={clsx(styles.authContainer, "flex w-full h-full")}>
        <div className="relative z-10 flex flex-col items-center flex-1 w-full h-full gap-10">
          <ShadowLeft />
          <AppLogo withTitle className="z-20" />
          <Content />
          <ShadowRight />
        </div>
      </section>
      <Image
        width={1000}
        height={500}
        src="/img/authPage/globeShape.png"
        alt="Globe image"
        className={clsx(styles.authContainer_globeImg)}
      />
    </>
  )
}

export default AuthPage
