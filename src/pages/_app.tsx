import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
