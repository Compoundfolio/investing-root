"use client"

import { memo } from "react"
import styles from "./SideBar.module.css"
import { AppLogo } from "@core"
import { Navigation, UserAvatar } from "./components"
import { usePathname } from "next/navigation"
import { ROUTES } from "../../routing/routes"

const authRoues = Object.values(ROUTES)

const SideBar = () => {
  const pathname = usePathname() as any

  return authRoues.includes(pathname) ? (
    <aside className={styles.sideBarContainer}>
      <AppLogo />
      <UserAvatar />
      <hr className="w-full bg-white" />
      <Navigation />
    </aside>
  ) : null
}

export default memo(SideBar)
