// "use client"

import styles from './layout.module.css'
import './global.css'

import { Montserrat } from "next/font/google";
import { DebugObserver } from "src/utils";
import { RecoilRootWrapper } from "./rootWrappers";
import clsx from 'clsx';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Sign In",
  description: "Sign in to start you journey!",
 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html lang="en">
      <head></head>
      <body>
        <RecoilRootWrapper>
          <DebugObserver />
          <main className={clsx([ styles.main, montserrat.className ])}>
            <div className={styles.container}>
              {/* {user && (
                <button onClick={() => auth.signOut()} className="absolute text-white top-4 left-4">
                  Sign Out
                </button>
              )} */}
              {/* {isRenderSideBar ? <>
                <div className='p-10'>
                  <Component key="rootComponent" {...pageProps} />
                </div>
                <SideBar />
              </> : (
                <Component key="rootComponent" {...pageProps} />
              )} */}
              {children}
            </div>
          </main>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}