import { ChangeEvent, FormEvent, useState } from 'react';
import { useAsyncState } from '../../hooks/asyncRequest';

import BrandSidebar from '../../components/brandSidebar';
import Link from 'next/link';

import styles from './login.module.scss';

import { postGetProfile } from '../../services/user';
import { MockUser } from '../../../../libs/mockData/users';

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const getProfile = async (): Promise<MockUser> => {
    return await postGetProfile({ username, password });
  };

  const [{ error, isLoading, responseData }, makeRequest] =
    useAsyncState(getProfile);

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

  // TODO dispatch user data to store when make request finishes
  // TODO add loading and error render states

  return (
    <section className={styles.container}>
      <BrandSidebar />
      <form className={styles.loginForm} onSubmit={handleLoginClick}>
        <h1 className="heading-2 align-center">Log in</h1>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
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
          className="margin-bottom-2 input"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          type="password"
          value={password}
        />
        <button className="button" name="login" type="submit">
          Log in
        </button>
        <span className={styles.addendum}>
          You can find a list of the mocked users at the{' '}
          <Link href="/register">Register page</Link>.
        </span>
      </form>
    </section>
  );
};

export default Login;
