import { NotificationPageContainer } from "@core"
import React from "react"

export default function NotFound() {
  return (
    <NotificationPageContainer
      miniMessage="404"
      message="Page Not Found"
      messageType="Error"
    />
  )
}
