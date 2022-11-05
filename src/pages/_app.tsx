import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
