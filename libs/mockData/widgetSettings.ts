import { IntroWidgetProps } from '../../apps/front-end/components/intro';
import { MockUser } from './users';

export interface IntroWidgetSettings {
  displayOrder?: 0 | 1 | 2 | 3 | 4;
  props?: IntroWidgetProps;
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

export interface IntroWidgetRule {
  createdAt: string;
  filterArguments?: FilterArgument[];
  filterFunction: RuleFilterFunction;
  id: string;
  specificity: number;
  type: RuleType;
  widgetSettings: IntroWidgetSettings;
}

// TODO enable admin editing of these rules
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
          'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        introText: 'Special retiree discounts every wednesday!',
      },
    },
  },
  {
    createdAt: '2022-01-29',
    filterArguments: [['segment', 'retired']],
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
      displayOrder: 1,
      props: {
        introText: 'You work here!',
      },
    },
  },
];

export interface WidgetRules {
  intro: IntroWidgetRule[];
}

export const INITIAL_WIDGET_RULES: WidgetRules = {
  intro: MOCK_INTRO_RULES,
};
