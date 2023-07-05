"use client"

import { memo } from "react"
import styles from "./SideBar.module.css"
import { AppLogo, useAuth } from "@core"
import { Navigation, UserAvatar } from "./components"

const SideBar = () => {
  const { isAuth } = useAuth()

  return isAuth ?
    <aside className={styles.sideBarContainer}>
      <AppLogo />
      <UserAvatar />
      <hr className="w-full bg-white" />
      <Navigation />
    </aside>
  : null
}

export default memo(SideBar)
