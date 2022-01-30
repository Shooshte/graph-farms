import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useAsyncState } from '../../hooks/asyncRequest';

import BrandSidebar from '../../components/brandSidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './login.module.scss';

import { postGetProfile } from '../../services';
import UserContext from '../../context/user';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const userContext = useContext(UserContext);

  const getProfile = async (): Promise<void> => {
    try {
      const userProfile = await postGetProfile({ username, password });
      userContext?.setUserData({ newUserData: userProfile, updateRoute: true });
    } catch (e) {
      userContext?.setUserData({ newUserData: undefined, updateRoute: true });
      throw e;
    }
  };

  const [{ error, isLoading }, makeRequest] = useAsyncState(getProfile);

  const isAuthenticated = useMemo(() => {
    return !!userContext?.userData;
  }, [userContext]);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/shop');
    }
  }, [isAuthenticated, router]);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e?.target?.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e?.target?.value);
  };

  const handleLoginClick = (e: FormEvent) => {
    e.preventDefault();
    makeRequest();
  };

  return (
    <section className={styles.container}>
      <BrandSidebar />
      <form className={styles.loginForm} onSubmit={handleLoginClick}>
        <h1 className="heading-2 align-center">Log in</h1>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          autoComplete="username"
          className="margin-bottom-3 input"
          id="username"
          name="username"
          onChange={handleUsernameChange}
          type="text"
          value={username}
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          autoComplete="current-password"
          className="margin-bottom-2 input"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          type="password"
          value={password}
        />
        <button
          className="button"
          disabled={isLoading}
          name="login"
          type="submit"
        >
          {isLoading ? 'Loading...' : 'Log in'}
        </button>
        {error ? (
          <div className="message error text margin-top-3 margin-bottom-3">
            {`There was a problem: ${error}`}
          </div>
        ) : null}
        <span className={styles.addendum}>
          You can find a list of the mocked users at the{' '}
          <Link href="/register">Register page</Link>.
        </span>
      </form>
    </section>
  );
};

export default Login;
