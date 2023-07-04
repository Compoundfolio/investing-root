"use client"

import Image from "next/image"
import React from "react"
import { useHandleGoogleAuthSubmit } from "../hooks"

const GoogleAuthButton = () => {
  const { mutate: authWithGoogle } = useHandleGoogleAuthSubmit()

  return (
    <button
      onClick={() => authWithGoogle()}
      className="justify-center gap-2 p-2 text-black transition duration-150 rounded-[30px] w-fit hover:shadow hover:bg-gray-50"
    >
      {/* TODO: Download image */}
      <Image
        width={24}
        height={24}
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
    </button>
  )
}

export default GoogleAuthButton
