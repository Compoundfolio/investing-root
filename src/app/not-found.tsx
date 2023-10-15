import { AppLogo } from "@core"
import React from "react"
import clsx from "clsx"
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full fadeIn">
        <AppLogo withTitle />
        <section className="flex flex-col">
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
        <footer></footer>
      </div>
      <div className={styles.notFoundPage_roundEmptinessVolume} />
    </>
  )
}
