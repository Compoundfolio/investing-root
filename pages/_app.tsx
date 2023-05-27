import { RecoilRoot } from 'recoil';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DebugObserver } from 'src/utils';
import { StyledMain } from 'styles/globalStyledComponents';
import styles from '../styles/Home.module.css'
// import { QueryClientProvider, Hydrate } from 'react-query';
import { SessionProvider } from "next-auth/react"
import { User, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useEffect } from 'react';
import { initFirebase } from '../firebase';
import { SideBar } from '@srcComponents';
import { Montserrat, Chakra_Petch } from "next/font/google"
import { useEffect, useState } from 'react'
import { ROUTES, ROUTES_GUEST } from 'src/routing';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
})

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin']
})

// export default useDebounce

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const auth = getAuth(initFirebase());
  const router = useRouter();

  const [user] = useAuthState(auth);

  const debouncedUser = useDebounce<User>(user, 5000)

  useEffect(() => {
    router.push(debouncedUser ? ROUTES.DASHBOARD : ROUTES_GUEST.AUTH);
  }, [debouncedUser])

  const isRenderSideBar = Object
    .values<string>(ROUTES)
    .includes(router.pathname)

  return (
    <SessionProvider session={session}>
      {/* <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}> */}
      <RecoilRoot>
        <DebugObserver />
        <StyledMain className={montserrat.className}>
          <div className={styles.container}>
            {user && (
              <button onClick={() => auth.signOut()} className="absolute text-white top-4 left-4">
                Sign Out
              </button>
            )}
            {isRenderSideBar ? <>
              <div className='p-10'>
                <Component key="rootComponent" {...pageProps} />
              </div>
              <SideBar />
              </> : (
              <Component key="rootComponent" {...pageProps} />
            )}
          </div>
        </StyledMain>
      </RecoilRoot>
      {/* </Hydrate>
      </QueryClientProvider> */}
    </SessionProvider>
  )
}