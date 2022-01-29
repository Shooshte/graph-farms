import { useContext, useMemo } from 'react';
import Intro from '../../components/intro';
import LoyaltyReward from '../../components/loyaltyReward';
import styles from './shop.module.scss';

import UserContext from '../../context/user';
import WidgetRulesContext from '../../context/rules/index';

const WIDGET_COMPONENTS = {
  intro: Intro,
  loyalty: LoyaltyReward,
};

const Shop = () => {
  const { userData } = useContext(UserContext);
  const {
    widgetRules: { intro, loyalty },
  } = useContext(WidgetRulesContext);

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
      return {
        widgetType: 'intro',
        widgetSettings: currentRule?.widgetSettings,
      };
    }
  }, [intro, userData]);

  const loyaltySettings = useMemo(() => {
    if (userData) {
      const currentRule = loyalty
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
      return {
        widgetType: 'loyalty',
        widgetSettings: currentRule?.widgetSettings,
      };
    }
  }, [loyalty, userData]);

  const allWidgetSettings = useMemo(() => {
    return [introSettings, loyaltySettings]
      .filter((settings) => settings)
      .sort((a, b) => {
        return a.widgetSettings.displayOrder - b.widgetSettings.displayOrder;
      });
  }, [introSettings, loyaltySettings]);

  return (
    <section className={styles.container}>
      <h1 className="heading-2">GraphFarm shop</h1>
      <div className={styles.widgets}>
        {allWidgetSettings.length > 0
          ? allWidgetSettings.map((widgetSetting) => {
              const WidgetComponent =
                WIDGET_COMPONENTS[widgetSetting.widgetType];

              return widgetSetting.widgetSettings.displayOrder > 0 ? (
                <WidgetComponent
                  key={widgetSetting.widgetType}
                  {...widgetSetting.widgetSettings.props}
                />
              ) : null;
            })
          : null}
      </div>
    </section>
  );
};

export default Shop;
