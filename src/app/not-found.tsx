import { AppLogo } from "@core"
import React from "react"
import clsx from "clsx"
import styles from "./not-found.module.css"
import Image from "next/image"

export default function NotFound() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-between w-full h-full fadeIn">
        <AppLogo withTitle />
        <section className="z-10 flex flex-col">
          <span className={clsx(styles.coreText, styles.notFoundPage_subTitle)}>
            404
          </span>
          <h1 className={clsx(styles.coreText, styles.notFoundPage_title)}>
            Page Not Found
          </h1>
          <span
            className={clsx(
              styles.coreText,
              styles.notFoundPage_subTitle,
              "self-end"
            )}
          >
            Error
          </span>
        </section>
        <footer className="z-10"></footer>
      </div>

      <div className={styles.notFoundPage_roundEmptinessVolume} />
      <Image
        src="/img/common/skyBg.png"
        alt="Globe image"
        className={styles.skyBg}
        width={1920}
        height={1080}
      />
    </>
  )
}
