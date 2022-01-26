import { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/navbar';

import '../styles/reset.css';
import '../styles/main.scss';

import styles from './app.module.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Graph Farms</title>
      </Head>
      <>
        <Navbar isAuthenticated={false} isAdmin={false} />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </>
    </>
  );
};

export default App;
