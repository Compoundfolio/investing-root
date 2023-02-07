import { RecoilRoot } from 'recoil';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DebugObserver } from 'src/utils';
import { StyledMain } from 'styles/globalStyledComponents';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { queryClient } from 'src/utils/queryClient';
import { QueryClientProvider, Hydrate } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,500;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <DebugObserver />
            <StyledMain>
              <div className={styles.container}>
                <Component {...pageProps} />
              </div>
            </StyledMain>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}