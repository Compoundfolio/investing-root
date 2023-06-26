"use client"

import { useEffect, useState } from "react"

const userAttentionWordList = [
  "invest",
  "build the future",
  "do finance",
  "choose right stocks",
  "make dissensions",
] as const

const PresentativeArea = () => {
  const [userAttentionWord, setUserAttentionWord] = useState<string>(
    userAttentionWordList[0]
  )

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setUserAttentionWord((prev) => {
        const nextWordIndex =
          userAttentionWordList.findIndex((word) => word === prev) + 1
        return userAttentionWordList[nextWordIndex] ?? userAttentionWordList[0]
      })
    }, 3000)

    return () => {
      clearInterval(timeoutId)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-white">
        You <span className="underline">{userAttentionWord}</span>{" "}
        <b className="text-red-600">W R O N G</b>
      </h1>
      <span className="text-xl text-gray-300">
        While you`re not manage your assets with Compaundfolio
      </span>
    </div>
  )
}

export default PresentativeArea
