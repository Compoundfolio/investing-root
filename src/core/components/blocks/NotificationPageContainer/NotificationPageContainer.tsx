import React, { ReactNode } from "react"
import { AppLogo } from "../../icons"
import clsx from "clsx"
import { MVV_ROUTES } from "src/routing"
import Image from "next/image"
import Link from "next/link"
import styles from "./NotificationPageContainer.module.css"

interface INotificationPageContainer {
  miniMessage: string
  message: string
  messageType: string
  detailedMessage?: string
  centerVolumeComponent?: ReactNode
}

export default function NotificationPageContainer({
  miniMessage,
  message,
  messageType = "Error",
  detailedMessage,
  centerVolumeComponent,
}: INotificationPageContainer) {
  return (
    <>
      <div className="relative flex flex-col items-center justify-between w-full h-full fadeIn">
        <AppLogo withTitle />
        <section className="z-10 flex flex-col mt-8">
          <span className={clsx(styles.coreText, styles.notifyPage_subTitle)}>
            {miniMessage}
          </span>
          <h1 className={clsx(styles.coreText, styles.notifyPage_title)}>
            {message}
          </h1>
          <span
            className={clsx(
              styles.coreText,
              styles.notifyPage_subTitle,
              "self-end"
            )}
          >
            {messageType}
          </span>
          {detailedMessage && (
            <span className={styles.notifyPage_detailedMessage}>
              <b>Or team already notified.</b> <br />
              {detailedMessage}
            </span>
          )}
        </section>
        <footer className="z-10 flex items-center justify-between w-full">
          {Object.values(MVV_ROUTES).map(({ path, pageName }) => (
            <div className="w-full text-center">
              <Link
                href={path}
                target="_blank"
                className={styles.notifyPage_footer_pageLink}
                title="Open in new tab"
              >
                {pageName}
              </Link>
            </div>
          ))}
        </footer>
      </div>

      {centerVolumeComponent ?? (
        <div className={styles.notifyPage_roundEmptinessVolume} />
      )}

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
