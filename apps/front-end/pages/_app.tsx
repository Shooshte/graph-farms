import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/navbar';
import UserContext from '../context/user';

import '../styles/reset.css';
import '../styles/main.scss';

import styles from './app.module.scss';

import { MockUser } from '../../../libs/mockData/users';

const App = ({ Component, pageProps }: AppProps) => {
  const [userData, setUserData] = useState<MockUser>(undefined);

  const router = useRouter();

  const contextValue = useMemo(() => {
    const handleUserDataChange = (userData: MockUser): void => {
      setUserData(userData);
      if (!userData) {
        router.push('/login');
      }
    };
    return { userData, setUserData: handleUserDataChange };
  }, [userData, router]);

  return (
    <>
      <Head>
        <title>Graph Farms</title>
      </Head>
      <UserContext.Provider value={contextValue}>
        <Navbar />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </UserContext.Provider>
    </>
  );
};

export default App;
