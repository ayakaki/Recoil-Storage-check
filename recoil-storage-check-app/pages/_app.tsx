import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    console.log('_app.tsx にて起動');
  }, [router.pathname]);

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
