import { RecoilRoot } from 'recoil';
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import { DebugObserver } from 'src/utils';
// import { StyledMain } from 'styles/globalStyledComponents';
import { SessionProvider } from "next-auth/react"
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from '../firebase';
import { SideBar } from '@srcComponents';
import { Montserrat, Chakra_Petch } from "next/font/google"
import { useEffect } from 'react'
import { ROUTES, ROUTES_GUEST } from 'src/routing';

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

  useEffect(() => {
    router.push(user ? ROUTES_GUEST.BROKERAGES_SELECTION : ROUTES_GUEST.AUTH);
  }, [user])

  const isRenderSideBar = Object
    .values<string>(ROUTES)
    .includes(router.pathname)

  return (
    <SessionProvider session={session}>
      {/* <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}> */}
      <RecoilRoot>
        <DebugObserver />
        {/* <StyledMain className={montserrat.className}> */}
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
        {/* </StyledMain> */}
      </RecoilRoot>
      {/* </Hydrate>
      </QueryClientProvider> */}
    </SessionProvider>
  )
}