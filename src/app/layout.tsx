import styles from "./layout.module.css"
import "./global.css"

import { Montserrat } from "next/font/google"
import { DebugObserver } from "src/utils"
import {
  ReactQueryProvider,
  RecoilRootWrapper,
  NotificationsRoot,
} from "./rootWrappers"
import clsx from "clsx"
import { SideBar } from "@srcComponents"
import { Chakra_Petch } from "next/font/google"

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "block",
  variable: "--font-chakra",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "block",
})

export const metadata = {
  title: "Sign In",
  description: "Sign in to start you journey!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={chakra.variable}>
      <head>
        <link rel="icon" href="/fav.png" sizes="any" />
      </head>
      <body>
        <ReactQueryProvider>
          <RecoilRootWrapper>
            <DebugObserver />
            <NotificationsRoot />
            <main className={clsx([styles.main, montserrat.className])}>
              <SideBar />
              <div className={styles.container} id="contentArea">
                {children}
              </div>
            </main>
          </RecoilRootWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
