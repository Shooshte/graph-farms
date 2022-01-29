import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/navbar';
import UserContext from '../context/user';
import WidgetRulesContext from '../context/rules';

import '../styles/reset.css';
import '../styles/main.scss';

import styles from './app.module.scss';

import {
  INITIAL_WIDGET_RULES,
  WidgetRules,
} from '../../../libs/mockData/widgetSettings';
import { MockUser } from '../../../libs/mockData/users';

const App = ({ Component, pageProps }: AppProps) => {
  const [userData, setUserData] = useState<MockUser>(undefined);
  const [widgetRules, setWidgetRules] =
    useState<WidgetRules>(INITIAL_WIDGET_RULES);

  const router = useRouter();

  const widgetRulesContextValue = useMemo(() => {
    const handleRulesChange = (newRules: WidgetRules) => {
      setWidgetRules({ ...newRules });
    };

    return { widgetRules, setWidgetRules: handleRulesChange };
  }, [widgetRules]);

  const userContextValue = useMemo(() => {
    const handleUserDataChange = ({
      newUserData,
      updateRoute = false,
    }): void => {
      setUserData(newUserData);
      if (updateRoute) {
        if (newUserData) {
          // admin user use case
          if (newUserData?.role === 'admin') {
            router.push('/admin');
          } else {
            // non-admin user use case
            router.push('/login');
          }
        } else {
          // logout use case
          router.push('/login');
        }
      }
    };
    return { userData, setUserData: handleUserDataChange };
  }, [userData, router]);

  useEffect(() => {
    if (router.pathname === '/about') {
      return;
    }
    if (userData) {
      // admin user use case
      if (userData?.role === 'admin') {
        router.push('/admin');
      } else {
        // non-admin user use case
        router.push('/login');
      }
    } else {
      // logout use case
      router.push('/login');
    }

    // only want to run this when the component mounts
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Graph Farms</title>
      </Head>
      <UserContext.Provider value={userContextValue}>
        <Navbar />
        <WidgetRulesContext.Provider value={widgetRulesContextValue}>
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
        </WidgetRulesContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
