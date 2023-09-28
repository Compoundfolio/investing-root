"use client"

import { Spinner } from "@core"
import React, { useEffect } from "react"
import useCommonAuthSubmitOptions from "src/components/pages/AuthPage/components/AuthArea/hooks/useCommonAuthSubmitOptions"

// TODO: Not index the page

const WtfAmI = () => {
  const { onSuccess } = useCommonAuthSubmitOptions()
  useEffect(() => {
    const REDIRECT_URI = window.location.origin + "/auth/callback"

    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")
    const state = params.get("state")

    fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/google", {
      method: "POST",
      body: JSON.stringify({ code, state, redirectUri: REDIRECT_URI }),
      headers: [["Content-Type", "application/json"]],
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(
            "Backend responded with bad response code: " + response
          )
        }
      })
      .then((body) => {
        onSuccess(body)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <Spinner />
      <div className="text-center">
        <h1 className="text-white text-shadow-white">
          Connecting to your google account
        </h1>
        <small className="text-gray-400">
          It may take from <b>5s</b> to <b>30s</b>
        </small>
      </div>
    </div>
  )
}

export default WtfAmI
