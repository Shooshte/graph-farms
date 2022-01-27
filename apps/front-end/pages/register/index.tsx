import { MOCK_USERS } from '../../../../libs/mockData/users';

import styles from './register.module.scss';

const Register = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.userList}>
        <h1 className="heading-3">
          List of current mocked users you can use at the login page:
        </h1>
        {MOCK_USERS.map((userData) => {
          const { id, username, password, segment } = userData;
          return (
            <li className={styles.user} key={id}>
              <label className="label">username/password</label>
              <h2 className="heading-5">{`${username}/${password}`}</h2>
              <label className="label">segment</label>
              <h2 className="heading-5">{segment}</h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Register;
