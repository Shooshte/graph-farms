import { ChangeEvent, FormEvent, useState } from 'react';

import BrandSidebar from '../../components/brandSidebar';

import styles from './login.module.scss';

const Login = () => {
  const [username, setUsername] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);

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
    // TODO mock login here
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
      </form>
    </section>
  );
};

export default Login;
