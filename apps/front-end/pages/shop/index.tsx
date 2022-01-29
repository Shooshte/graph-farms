import { useContext, useMemo } from 'react';
import Intro from '../../components/intro';
import styles from './shop.module.scss';

import UserContext from '../../context/user';
import WidgetRulesContext from '../../context/rules/index';

const Shop = () => {
  const { userData } = useContext(UserContext);
  const {
    widgetRules: { intro },
  } = useContext(WidgetRulesContext);

  // TODO add all four widgets
  const introSettings = useMemo(() => {
    if (userData) {
      const currentRule = intro
        .filter(({ filterFunction }) => {
          const filterReturn = filterFunction(userData);
          return filterReturn;
        })
        .reduce((previousValue, currentValue) => {
          const { specificity, createdAt } = previousValue;
          if (specificity !== currentValue.specificity) {
            return specificity > currentValue.specificity
              ? currentValue
              : previousValue;
          } else {
            return createdAt < currentValue.createdAt
              ? currentValue
              : previousValue;
          }
        });
      return currentRule?.widgetSettings;
    }
  }, [intro, userData]);

  return (
    <section className={styles.container}>
      <h1 className="heading-2">GraphFarm shop</h1>
      <div className={styles.widgets}>
        {introSettings?.displayOrder > 0 ? (
          <Intro {...introSettings?.props} />
        ) : null}
      </div>
    </section>
  );
};

export default Shop;
