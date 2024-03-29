import { ActButton } from "@core"
import React from "react"
import styles from "./MvvStageUserMessageView.module.css"
import clsx from "clsx"

const MvvStageUserMessageView = () => {
  return (
    <div
      className={clsx(styles.mvv, "flex flex-col justify-between h-full w-fit")}
    >
      <div className={styles.fakeDiv} />
      <section
        className={clsx(
          styles.mvv_contentWrap,
          "flex flex-col justify-center gap-20"
        )}
      >
        <div className="flex flex-col gap-4">
          <h1 className={styles.mvv_title}>We appreciate your interest !</h1>
          <span className={styles.mvv_subtitle}>
            Kindly inform you, we are still in development. <br />
            And we need your feedback to help Compoundfolio grow.
          </span>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <span className={styles.mvv_formCta_title}>
            Please, fell free to help us build the product, which will solve{" "}
            <b>your</b> pain points.
          </span>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className={styles.mvv_formCta_supportText}>
              Get <b>3 month</b> of Compoundfolio usage <b>for free!</b>
            </span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_jBMYXFLwLIDGP3sfxIHzBHnbVvaSDsCHoMsvwoXIVEPQaw/viewform?usp=sf_link"
              target="_blank"
            >
              <ActButton className={styles.mvv_formCta_button} bigActButton>
                Fill Quiz
              </ActButton>
            </a>
            <span className={styles.mvv_formCta_supportText}>
              {/* It'll take less then <b>5 minutes</b> */}
              <b>5 minutes</b> long
            </span>
          </div>
        </div>
        <span className={clsx([styles.mvv_formCta_title, "opacity-60"])}>
          We plan to ship first version at the end of 2024. <br />
          We'll notify you via email.
        </span>
      </section>
      <footer className="flex justify-between align-center">
        <div className="flex gap-3 align-center">
          <span className={styles.mvv_footer_updates}>Follow for updates</span>
          <a
            href="https://www.linkedin.com/company/compoundfolio/?viewAsMember=true"
            title="LinkedIn"
          >
            <svg
              className={styles.mvv_socialMediaIcon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 1.76471V22.2353C24 22.7033 23.8141 23.1522 23.4831 23.4831C23.1522 23.8141 22.7033 24 22.2353 24H1.76471C1.29668 24 0.847817 23.8141 0.51687 23.4831C0.185924 23.1522 0 22.7033 0 22.2353L0 1.76471C0 1.29668 0.185924 0.847817 0.51687 0.51687C0.847817 0.185924 1.29668 0 1.76471 0L22.2353 0C22.7033 0 23.1522 0.185924 23.4831 0.51687C23.8141 0.847817 24 1.29668 24 1.76471V1.76471ZM7.05882 9.17647H3.52941V20.4706H7.05882V9.17647ZM7.37647 5.29412C7.37833 5.02715 7.32759 4.76242 7.22714 4.51506C7.12669 4.2677 6.9785 4.04255 6.79103 3.85246C6.60357 3.66237 6.38049 3.51107 6.13455 3.4072C5.88861 3.30332 5.62462 3.24891 5.35765 3.24706H5.29412C4.7512 3.24706 4.23053 3.46273 3.84663 3.84663C3.46273 4.23053 3.24706 4.7512 3.24706 5.29412C3.24706 5.83703 3.46273 6.35771 3.84663 6.74161C4.23053 7.1255 4.7512 7.34118 5.29412 7.34118V7.34118C5.56111 7.34774 5.82678 7.30164 6.07594 7.2055C6.32511 7.10936 6.55289 6.96506 6.74627 6.78086C6.93965 6.59666 7.09484 6.37616 7.20297 6.13196C7.3111 5.88776 7.37006 5.62464 7.37647 5.35765V5.29412ZM20.4706 13.6094C20.4706 10.2141 18.3106 8.89412 16.1647 8.89412C15.4621 8.85894 14.7625 9.00859 14.1358 9.32814C13.5091 9.64769 12.9771 10.126 12.5929 10.7153H12.4941V9.17647H9.17647V20.4706H12.7059V14.4635C12.6549 13.8483 12.8487 13.2378 13.2452 12.7646C13.6417 12.2915 14.2089 11.9939 14.8235 11.9365H14.9576C16.08 11.9365 16.9129 12.6424 16.9129 14.4212V20.4706H20.4424L20.4706 13.6094Z"
                fill="#ffd390"
              />
            </svg>
          </a>
          <a href="https://twitter.com/compoundfo" title="X (Twitter)">
            <svg
              className={styles.mvv_socialMediaIcon}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9877 16.2296L0 1.3335H9.49513L16.8951 10.5403L24.8007 1.37495H30.0301L19.4235 13.6861L32 29.3335H22.5332L14.5206 19.3769L5.96634 29.3059H0.708592L11.9877 16.2296ZM23.9131 26.5735L5.82209 4.09348H8.1142L26.1824 26.5735H23.9131Z"
                fill="#FFD390"
              />
            </svg>
          </a>
        </div>
        <div className={styles.mvv_footer_email_container}>
          <a
            href="mailto:compaundfolio.support@gmail.com"
            className={styles.mvv_footer_email}
          >
            compaundfolio.support@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default MvvStageUserMessageView
