"use client"

import Image from "next/image"
import React from "react"
import styles from "./GoogleAuthButton.module.css"
import { useHandleGoogleAuthSubmit } from "../hooks"
import clsx from "clsx"

const GoogleAuthButton = () => {
  const { mutate: authWithGoogle } = useHandleGoogleAuthSubmit()

  return (
    <button
      onClick={() => authWithGoogle()}
      className={clsx(
        styles.authButton,
        "justify-center gap-2 p-2 text-black transition duration-500 rounded-[30px] w-fit"
      )}
    >
      {/* TODO: Download image */}
      <Image
        width={24}
        height={24}
        src="/img/authPage/googleAuthIcon.svg"
        priority={true}
        alt="google logo"
        className={styles.authButton_icon}
      />
    </button>
  )
}

export default GoogleAuthButton
