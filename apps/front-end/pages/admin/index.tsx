import styles from './adminInputs.module.scss';

import IntroInputs from '../../components/admin/introInputs';

const AdminInputs = () => (
  <section className={styles.container}>
    <h1 className="heading-2">Shop widget rules definitions</h1>
    <IntroInputs />
  </section>
);

export default AdminInputs;
