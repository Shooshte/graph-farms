import { IntroWidgetProps } from '../../apps/front-end/components/intro';
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

type RuleFilterFunction = (user: MockUser) => boolean;

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
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => user.segment === 'regular',
    id: '0',
    specificity: 8,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 2,
      props: {
        boldFirstTen: false,
        hiddenItemGroups: ['meat'],
        numberOfItems: 4,
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
        boldFirstTen: true,
        hiddenItemGroups: ['drinks'],
        numberOfItems: 4,
      },
    },
  },
];

export const MOCK_INTRO_RULES: IntroWidgetRule[] = [
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
  {
    createdAt: '2022-01-29',
    filterArguments: [['segment', 'regular']],
    filterFunction: (user) => user.segment === 'regular',
    id: '2',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 0,
      props: {
        imageUrl:
          'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        introText: 'Welcome back!',
      },
    },
  },
  {
    createdAt: '2022-01-29',
    filterArguments: [['segment', 'blue-collar']],
    filterFunction: (user) => user.segment === 'retired',
    id: '3',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 1,
      props: {
        imageUrl:
          'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        introText: 'Special retiree discounts every wednesday!',
      },
    },
  },
  {
    createdAt: '2022-02-03',
    filterArguments: [['segment', 'retired']],
    filterFunction: (user) => user.segment === 'retired',
    id: '4',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 1,
      props: {
        imageUrl:
          'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        introText: 'Special retiree discounts every tuesday!',
      },
    },
  },
  {
    createdAt: '2022-01-28',
    filterArguments: [['segment', 'admin']],
    filterFunction: (user) => user.segment === 'admin',
    id: '5',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 3,
      props: {
        introText: 'You work here!',
      },
    },
  },
];

export const MOCK_LOYALTY_RULES: LoyaltyWidgetRule[] = [
  {
    createdAt: '2022-01-29',
    filterArguments: [['pastMonthPurchases', '> 5']],
    filterFunction: (user) => user.pastMonthPurchases.length > 5,
    id: '5',
    specificity: 7,
    type: 'userPurchases',
    widgetSettings: {
      displayOrder: 3,
      props: {
        discountPercentage: 20,
        borderColor: '#7bed9f',
        borderSize: '3px',
        itemId: '1',
      },
    },
  },
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => !!user,
    id: '5',
    specificity: 8,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 1,
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
    filterFunction: (user) => user.segment === 'regular',
    id: '1',
    specificity: 8,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 3,
      props: {
        includeItemImages: true,
        itemsCount: 3,
        shownItemGroups: ['meat'],
      },
    },
  },
  {
    createdAt: '2022-01-28',
    filterFunction: (user) => user.segment === 'retired',
    id: '1',
    specificity: 8,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 3,
      props: {
        includeItemImages: false,
        itemsCount: 3,
        shownItemGroups: ['vegetables'],
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
        shownItemGroups: ['drinks'],
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
