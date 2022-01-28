import styles from './brandSidebar.module.scss';

const brandSidebar = () => (
  <section className={styles.sidebar}>
    <h1 className="heading-1">Graph farms; produce done right!</h1>
    <ul className="list">
      <li className="heading-4">First marketing pitch</li>
      <li className="heading-4">Second marketing pitch</li>
      <li className="heading-4">Third marketing pitch</li>
      <li className="heading-4">Fourth marketing pitch</li>
      <li className="heading-4">Fifth marketing pitch</li>
    </ul>
  </section>
);

export default brandSidebar;
