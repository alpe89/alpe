import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alpe.dev 🇮🇹</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
