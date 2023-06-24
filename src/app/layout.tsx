import styles from './layout.module.css'
import './global.css'

import { Montserrat } from "next/font/google";
import { DebugObserver } from "src/utils";
import { RecoilRootWrapper } from "./rootWrappers";
import clsx from 'clsx';
import { SideBar } from '@srcComponents';

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
            <SideBar />
            <div className={styles.container}>
              {children}
            </div>
          </main>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}