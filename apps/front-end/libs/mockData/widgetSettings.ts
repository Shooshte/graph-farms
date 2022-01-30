import { IntroWidgetProps } from '../../components/intro';
import { ItemGroupName } from '../types/index';
import { MockUser } from './users';

type DisplayOrder = 0 | 1 | 2 | 3 | 4;

export interface AllItemsWidgetSettings {
  displayOrder?: DisplayOrder;
  props: {
    boldFirstTen: boolean;
    hiddenItemGroups: ItemGroupName[];
    numberOfItems: number;
  };
}

export interface IntroWidgetSettings {
  displayOrder?: DisplayOrder;
  props: IntroWidgetProps;
}

export interface LoyaltyWidgetSettings {
  displayOrder?: DisplayOrder;
  props: {
    borderColor: string;
    borderSize: string;
    discountPercentage: number;
    itemId: string;
  };
}

export interface RecommendedItemsWidgetSettings {
  displayOrder?: DisplayOrder;
  props: {
    includeItemImages: boolean;
    itemsCount: number;
    shownItemGroups: ItemGroupName[];
  };
}

export type RuleFilterFunction = (user: MockUser) => boolean;

export type RuleType =
  | 'userId'
  | 'userSegment'
  | 'userBasketItem'
  | 'userPurchases'
  | 'lastPurchaseDate'
  | 'userPurchasedItem'
  | 'userPurchasedGroup'
  | 'allUsers';

export type FilterArgument = [keyof MockUser, any];

interface WidgetRule {
  createdAt: string;
  filterArguments?: FilterArgument[];
  filterFunction: RuleFilterFunction;
  id: string;
  specificity: number;
  type: RuleType;
}

export interface IntroWidgetRule extends WidgetRule {
  widgetSettings: IntroWidgetSettings;
}

export interface LoyaltyWidgetRule extends WidgetRule {
  widgetSettings: LoyaltyWidgetSettings;
}

export interface RecommendedItemsRule extends WidgetRule {
  widgetSettings: RecommendedItemsWidgetSettings;
}

export interface AllItemsWidgetRule extends WidgetRule {
  widgetSettings: AllItemsWidgetSettings;
}

export const MOCK_ALL_ITEMS_RULES: AllItemsWidgetRule[] = [
  // don't show vegetables to people who purchased coca cola in the past month
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => {
      const { pastMonthPurchases } = user;
      return pastMonthPurchases.reduce((previousValue, currentValue) => {
        let purchasedItem: boolean = previousValue;
        currentValue.lines.forEach((line) => {
          if (line.itemId === '1') {
            purchasedItem = true;
          }
        });
        return purchasedItem;
      }, false);
    },
    id: '0',
    specificity: 8,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 2,
      props: {
        boldFirstTen: false,
        hiddenItemGroups: ['vegetables'],
        numberOfItems: 4,
      },
    },
  },
  // don't show drinks to regular users
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => user.segment === 'regular',
    id: '0',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 2,
      props: {
        boldFirstTen: false,
        hiddenItemGroups: ['drinks'],
        numberOfItems: 4,
      },
    },
  },
  // show all groups to all users that don't match a more specific filter
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => !!user,
    id: '1',
    specificity: 8,
    type: 'allUsers',
    widgetSettings: {
      displayOrder: 2,
      props: {
        boldFirstTen: true,
        hiddenItemGroups: [],
        numberOfItems: 4,
      },
    },
  },
];

export const MOCK_INTRO_RULES: IntroWidgetRule[] = [
  // show Welcome to the produce store for all users that don't have a more specific rule as the first widget
  {
    createdAt: '2022-01-25',
    filterFunction: (user) => !!user,
    id: '1',
    specificity: 8,
    type: 'allUsers',
    widgetSettings: {
      displayOrder: 1,
      props: {
        imageUrl:
          'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        introText: 'Welcome to the produce store!',
      },
    },
  },
  // show Welcome back for all users that bought more than 5 times past month as the first widget
  {
    createdAt: '2022-01-22',
    filterArguments: [['pastMonthPurchases', '.length > 5']],
    filterFunction: (user) => user.pastMonthPurchases.length > 5,
    id: '2',
    specificity: 4,
    type: 'userPurchasedItem',
    widgetSettings: {
      displayOrder: 1,
      props: {
        imageUrl:
          'https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        introText: 'Welcome back!',
      },
    },
  },
  // show We hope you enjoy shopping with us for all users whose segment is regular
  {
    createdAt: '2022-01-29',
    filterArguments: [['segment', 'regular']],
    filterFunction: (user) => user.segment === 'regular',
    id: '2',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 1,
      props: {
        imageUrl:
          'https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        introText: 'We hope you enjoy shopping with us.',
      },
    },
  },
  // hide introduction widget for admin users
  {
    createdAt: '2022-01-28',
    filterArguments: [['segment', 'admin']],
    filterFunction: (user) => user.segment === 'admin',
    id: '5',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 0,
      props: {},
    },
  },
];

export const MOCK_LOYALTY_RULES: LoyaltyWidgetRule[] = [
  // show a 40 percent discount for roastbeef for users that have more than 5 purchases past month first a 5px border
  {
    createdAt: '2022-01-29',
    filterArguments: [['pastMonthPurchases', '> 5']],
    filterFunction: (user) => user.pastMonthPurchases.length > 5,
    id: '5',
    specificity: 7,
    type: 'userPurchases',
    widgetSettings: {
      displayOrder: 2,
      props: {
        discountPercentage: 40,
        borderColor: '#7bed9f',
        borderSize: '5px',
        itemId: '44',
      },
    },
  },
  // show a 15 percent discount for chicken for users that have more than 2 purchases past month first a 2px border
  {
    createdAt: '2022-01-25',
    filterArguments: [['pastMonthPurchases', '> 2']],
    filterFunction: (user) => user.pastMonthPurchases.length > 5,
    id: '4',
    specificity: 7,
    type: 'userPurchases',
    widgetSettings: {
      displayOrder: 2,
      props: {
        discountPercentage: 15,
        borderColor: '#7bed9f',
        borderSize: '2px',
        itemId: '3',
      },
    },
  },
  // hide loyalty for all users that do not have a more specific rule
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => !!user,
    id: '6',
    specificity: 8,
    type: 'allUsers',
    widgetSettings: {
      displayOrder: 0,
      props: {
        discountPercentage: 10,
        borderColor: '#eccc68',
        borderSize: '1px',
        itemId: '6',
      },
    },
  },
];

export const MOCK_RECOMMENDED_RULES: RecommendedItemsRule[] = [
  {
    createdAt: '2022-01-28',
    filterFunction: (user) =>
      user.basket.lines.filter((line) => line.itemId === '5').length > 1,
    id: '1',
    specificity: 3,
    type: 'userBasketItem',
    widgetSettings: {
      displayOrder: 1,
      props: {
        includeItemImages: true,
        itemsCount: 8,
        shownItemGroups: ['drinks'],
      },
    },
  },
  {
    createdAt: '2022-01-28',
    filterFunction: (user) =>
      user.basket.lines.filter((line) => line.itemId === '4').length > 1,
    id: '2',
    specificity: 3,
    type: 'userBasketItem',
    widgetSettings: {
      displayOrder: 1,
      props: {
        includeItemImages: true,
        itemsCount: 8,
        shownItemGroups: ['drinks'],
      },
    },
  },
  {
    createdAt: '2022-01-28',
    filterFunction: (user) =>
      user.basket.lines.filter((line) => line.itemId === '7').length > 1,
    id: '3',
    specificity: 3,
    type: 'userBasketItem',
    widgetSettings: {
      displayOrder: 1,
      props: {
        includeItemImages: true,
        itemsCount: 8,
        shownItemGroups: ['drinks'],
      },
    },
  },
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => !!user,
    id: '1',
    specificity: 8,
    type: 'allUsers',
    widgetSettings: {
      displayOrder: 2,
      props: {
        includeItemImages: true,
        itemsCount: 3,
        shownItemGroups: ['vegetables'],
      },
    },
  },
];

export interface WidgetRules {
  allItems: AllItemsWidgetRule[];
  intro: IntroWidgetRule[];
  loyalty: LoyaltyWidgetRule[];
  recommended: RecommendedItemsRule[];
}

export const INITIAL_WIDGET_RULES: WidgetRules = {
  allItems: MOCK_ALL_ITEMS_RULES,
  intro: MOCK_INTRO_RULES,
  loyalty: MOCK_LOYALTY_RULES,
  recommended: MOCK_RECOMMENDED_RULES,
};
