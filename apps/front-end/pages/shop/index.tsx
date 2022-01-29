import { useContext, useMemo } from 'react';
import Intro from '../../components/intro';
import styles from './shop.module.scss';

// TODO move this to an API endpoint
import { MOCK_INTRO_RULES } from '../../../../libs/mockData/widgetSettings';
import UserContext from '../../context/user';

const Shop = () => {
  const { userData } = useContext(UserContext);

  // TODO add all four widgets
  const introSettings = useMemo(() => {
    if (userData) {
      const currentRule = MOCK_INTRO_RULES.filter(({ filterFunction }) => {
        const filterReturn = filterFunction(userData);
        return filterReturn;
      }).reduce((previousValue, currentValue) => {
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
  }, [userData]);

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
