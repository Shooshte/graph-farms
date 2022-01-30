import { useContext, useEffect, useMemo, useState } from 'react';
import { useAsyncState } from '../../hooks/asyncRequest';
import AllItems from '../../components/allItems';
import Intro from '../../components/intro';
import LoyaltyReward from '../../components/loyaltyReward';
import RecommendedItems from '../../components/recommendedItems';
import styles from './shop.module.scss';

import UserContext from '../../context/user';
import WidgetRulesContext from '../../context/rules/index';

import { getItemsInfo, getItemsGroups } from '../../services';
import { Item, ItemGroup } from '../../../../libs/types';

import { MOCK_PRICE_RULES } from '../../../../libs/mockData/pricesSettings';
import { MOCK_ITEM_GROUPS } from '../../../../libs/mockData/items';

interface ItemsData {
  items: Item[];
  itemGroups: ItemGroup[];
}

const INITIAL_ITEMS_DATA: ItemsData = {
  items: [],
  itemGroups: [],
};

const WIDGET_COMPONENTS = {
  allItems: AllItems,
  intro: Intro,
  loyalty: LoyaltyReward,
  recommended: RecommendedItems,
};

const Shop = () => {
  const [{ items, itemGroups }, setItemsData] =
    useState<ItemsData>(INITIAL_ITEMS_DATA);

  const getItemsData = async (): Promise<void> => {
    try {
      const items = await getItemsInfo();
      const itemGroups = await getItemsGroups();

      const itemsWithAdjustedPrice = items.map((item) => {
        const currentActiveRules = MOCK_PRICE_RULES.filter(
          ({ filterFunction }) => {
            const filterReturn = filterFunction(userData);
            return filterReturn;
          }
        ).filter((rule) => {
          // check if rule itemId matches item id
          if (rule.itemId === item.id) {
            return true;
          }
          // check if rule item group includes item id
          let includedInGroups = false;
          rule.itemGroups?.forEach((groupName) => {
            const group = MOCK_ITEM_GROUPS.find(
              (group) => group.name === groupName
            );
            if (group.itemIds.includes(item.id)) {
              includedInGroups = true;
            }
          });
          return includedInGroups;
        });

        const currentActiveRule =
          currentActiveRules.length > 0
            ? currentActiveRules.reduce((previousValue, currentValue) => {
                if (previousValue?.specificity !== currentValue.specificity) {
                  return previousValue?.specificity > currentValue.specificity
                    ? currentValue
                    : previousValue;
                } else {
                  return previousValue?.createdAt < currentValue.createdAt
                    ? currentValue
                    : previousValue;
                }
              })
            : undefined;

        if (currentActiveRule) {
          const { defaultPrice } = item;
          if (currentActiveRule?.percentageDiscount) {
            const newPrice =
              item?.defaultPrice -
              item?.defaultPrice *
                (currentActiveRule?.percentageDiscount / 100);
            return {
              ...item,
              defaultPrice: newPrice,
            };
          } else if (currentActiveRule?.priceDeduction) {
            const newPrice = defaultPrice - currentActiveRule.priceDeduction;
            return {
              ...item,
              defaultPrice: newPrice,
            };
          }
          return { ...item };
        }
        return { ...item };
      });

      setItemsData({ items: itemsWithAdjustedPrice, itemGroups });
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
    widgetRules: { intro, loyalty, recommended, allItems },
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
        widgetSettings: {
          displayOrder: currentRule?.widgetSettings.displayOrder,
          props: { ...currentRule?.widgetSettings?.props, items },
        },
      };
    }
  }, [items, loyalty, userData]);

  const recommendedSettings = useMemo(() => {
    if (userData) {
      // TODO abstract this into a function
      const currentRule = recommended
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
        widgetType: 'recommended',
        widgetSettings: {
          displayOrder: currentRule?.widgetSettings.displayOrder,
          props: {
            ...currentRule?.widgetSettings?.props,
            items,
            itemGroups,
            loyaltyItemId: loyaltySettings?.widgetSettings?.props?.itemId,
          },
        },
      };
    }
  }, [items, itemGroups, loyaltySettings, recommended, userData]);

  const allItemsSettings = useMemo(() => {
    if (userData) {
      // TODO abstract this into a function
      const currentRule = allItems
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
        widgetType: 'allItems',
        widgetSettings: {
          displayOrder: currentRule?.widgetSettings.displayOrder,
          props: {
            ...currentRule?.widgetSettings?.props,
            items,
            itemGroups,
            loyaltyItemId: loyaltySettings?.widgetSettings?.props?.itemId,
          },
        },
      };
    }
  }, [allItems, items, itemGroups, loyaltySettings, userData]);

  const allWidgetSettings = useMemo(() => {
    return [
      allItemsSettings,
      introSettings,
      loyaltySettings,
      recommendedSettings,
    ]
      .filter((settings) => settings)
      .sort((a, b) => {
        return a.widgetSettings.displayOrder - b.widgetSettings.displayOrder;
      });
  }, [allItemsSettings, introSettings, loyaltySettings, recommendedSettings]);

  return (
    <section className={styles.container}>
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
