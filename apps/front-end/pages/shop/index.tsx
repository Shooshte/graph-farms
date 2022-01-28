import Intro from '../../components/intro';

import styles from './shop.module.scss';

const Shop = () => (
  <section className={styles.container}>
    <h1 className="heading-2">GraphFarm shop</h1>
    <div className={styles.widgets}>
      <Intro introText="Testing text 1!" />
      <Intro introText="Hello user ID 201!" />
      <Intro introText="Najboljše je bit pa v penziji ane!" />
      <Intro introText="Ne me gledat kot da ne delaš tukej." />
    </div>
  </section>
);

export default Shop;
