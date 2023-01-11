import { RecoilRoot } from 'recoil';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DebugObserver } from 'src/utils';
import { StyledMain } from 'styles/globalStyledComponents';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <StyledMain>
        <Component {...pageProps} />
      </StyledMain>
    </RecoilRoot>
  )
}