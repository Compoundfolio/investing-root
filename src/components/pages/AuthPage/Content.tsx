"use client"

import { useAuth } from "@core"
import AuthArea from "./components/AuthArea"
import { MvvStageUserMessageView } from "./components"

// TODO: Remove after MVV stage
const Content = () => {
  const { isAuth } = useAuth()

  return isAuth ? <MvvStageUserMessageView /> : <AuthArea />
}

export default Content
