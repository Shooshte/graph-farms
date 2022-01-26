import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Graph Farms</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
