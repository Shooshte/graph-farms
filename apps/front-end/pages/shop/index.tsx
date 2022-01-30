import { useContext, useEffect, useMemo, useState } from 'react';
import { useAsyncState } from '../../hooks/asyncRequest';
import Intro from '../../components/intro';
import LoyaltyReward from '../../components/loyaltyReward';
import styles from './shop.module.scss';

import UserContext from '../../context/user';
import WidgetRulesContext from '../../context/rules/index';

import { getItemsInfo, getItemsGroups } from '../../services';
import { Item, ItemGroup } from '../../../../libs/types';

interface ItemsData {
  items: Item[];
  itemGroups: ItemGroup[];
}

const INITIAL_ITEMS_DATA: ItemsData = {
  items: [],
  itemGroups: [],
};

const WIDGET_COMPONENTS = {
  intro: Intro,
  loyalty: LoyaltyReward,
};

const Shop = () => {
  const [itemsData, setItemsData] = useState<ItemsData>(INITIAL_ITEMS_DATA);

  const getItemsData = async (): Promise<void> => {
    try {
      const items = await getItemsInfo();
      const itemGroups = await getItemsGroups();

      setItemsData({ items, itemGroups });
    } catch (e) {
      setItemsData(INITIAL_ITEMS_DATA);
      throw e;
    }
  };

  const [{ error, isLoading }, makeRequest] = useAsyncState(getItemsData);

  useEffect(() => {
    makeRequest();
    // eslint-disable-next-line
  }, []);

  const { userData } = useContext(UserContext);
  const {
    widgetRules: { intro, loyalty },
  } = useContext(WidgetRulesContext);

  const introSettings = useMemo(() => {
    if (userData) {
      // TODO abstract this into a function
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
      // TODO abstract this into a function
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

  console.log('itemsData:', itemsData);

  return (
    <section className={styles.container}>
      <h1 className="heading-2">GraphFarm shop</h1>
      <>
        {isLoading ? (
          'Loading...'
        ) : error ? (
          <div className="message error text margin-top-3 margin-bottom-3">
            {`There was a problem: ${error}`}
          </div>
        ) : (
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
        )}
      </>
    </section>
  );
};

export default Shop;
