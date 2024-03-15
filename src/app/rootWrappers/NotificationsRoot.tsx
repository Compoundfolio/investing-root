"use client"

import { colors } from "@core"
import React from "react"
import { Toaster } from "sonner"

const NotificationsRoot = () => {
  return (
    <Toaster
      theme="dark"
      duration={1000 * 10}
      toastOptions={{
        style: { background: "transparent", color: colors.white },
      }}
    />
  )
}

export default NotificationsRoot
