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

import { useEffect, useState } from 'react'

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
    if (!debouncedUser) {
      router.push("/");
    }
  }, [debouncedUser])

  return (
    <SessionProvider session={session}>
      {/* <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}> */}
          <RecoilRoot>
            <DebugObserver />
            <StyledMain>
              <div className={styles.container}>
                {user && (
                  <button onClick={() => auth.signOut()} className="text-white">
                    Sign Out
                  </button>
                )}
                <Component {...pageProps} />
                {user && router.pathname !== '/brokerages-selection' && <SideBar />}
              </div>
            </StyledMain>
          </RecoilRoot>
        {/* </Hydrate>
      </QueryClientProvider> */}
    </SessionProvider>
  )
}