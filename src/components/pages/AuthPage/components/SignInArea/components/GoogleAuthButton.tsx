"use client"

import Image from "next/image"
import React from "react"
import { initFirebase } from "../../../../../../../firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useAuthState } from "react-firebase-hooks/auth"

const GoogleAuthButton = () => {
  const firebaseApp = initFirebase()
  const provider = new GoogleAuthProvider()
  const auth = getAuth(firebaseApp)
  const [user] = useAuthState(auth)
  const router = useRouter()

  // if (user) {
  //   router.push("/brokerages-selection");
  // }

  const signIn = async () => {
    await signInWithPopup(auth, provider)
  }

  return (
    <button
      onClick={signIn}
      className="justify-center w-full gap-2 px-8 py-3 text-black transition duration-150 bg-white rounded-lg hover:shadow hover:bg-gray-200"
    >
      {/* TODO: Download image */}
      <Image
        width={24}
        height={24}
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Log in with Google</span>
    </button>
  )
}

export default GoogleAuthButton
