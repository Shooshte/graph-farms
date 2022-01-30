import { MOCK_ITEM_GROUPS } from './items';

import { ItemGroupName } from '../types';
import { RuleType, RuleFilterFunction } from './widgetSettings';

interface PriceRule {
  createdAt: string;
  filterFunction: RuleFilterFunction;
  itemId?: string;
  itemGroups: ItemGroupName[];
  ruleType: RuleType;
  percentageDiscount?: number;
  priceDeduction?: number;
  specificity: number;
}

const meatGroup = MOCK_ITEM_GROUPS.find((group) => group.name === 'meat');

export const MOCK_PRICE_RULES: PriceRule[] = [
  // admins drink for free!!!
  {
    createdAt: '2022-01-02',
    filterFunction: (user) => user.segment === 'admin',
    percentageDiscount: 100,
    itemGroups: ['drinks'],
    ruleType: 'userSegment',
    specificity: 2,
  },
  // users who have had more than 3 purchases where get a 10% discount from all item groups.
  {
    createdAt: '2022-01-04',
    filterFunction: (user) => user.pastMonthPurchases.length > 3,
    percentageDiscount: 30,
    itemGroups: ['drinks', 'meat', 'vegetables'],
    ruleType: 'userPurchases',
    specificity: 4,
  },
  // users who bought meat get 50 cents off all vegetables
  {
    createdAt: '2022-01-25',
    filterFunction: (user) =>
      user.pastMonthPurchases.reduce((previousValue, currentValue) => {
        let boughtMeat: boolean = previousValue;
        currentValue.lines.forEach((line) => {
          if (meatGroup.itemIds.includes(line.itemId)) {
            boughtMeat = true;
          }
        });
        return boughtMeat;
      }, false),
    itemGroups: ['vegetables'],
    ruleType: 'userPurchasedGroup',
    priceDeduction: 0.5,
    specificity: 7,
  },
];
