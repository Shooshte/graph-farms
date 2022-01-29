import { IntroWidgetProps } from '../../apps/front-end/components/intro';
import { MockUser } from './users';

interface IntroWidgetSettings {
  displayOrder?: 0 | 1 | 2 | 3 | 4;
  props?: IntroWidgetProps;
}

type RuleFilterFunction = (user: MockUser) => boolean;

type RuleType =
  | 'userId'
  | 'userSegment'
  | 'userBasketItem'
  | 'userPurchases'
  | 'lastPurchaseDate'
  | 'userPurchasedItem'
  | 'userPurchasedGroup'
  | 'allUsers';

interface IntroWidgetRule {
  createdAt: Date;
  filterFunction: RuleFilterFunction;
  specificity: Number;
  type: RuleType;
  widgetSettings: IntroWidgetSettings;
}

export type WidgetRule = IntroWidgetRule;

// TODO enable admin editing of these rules
export const MOCK_INTRO_RULES: WidgetRule[] = [
  {
    createdAt: new Date('2022-01-29'),
    filterFunction: (user) => user.segment === 'regular',
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
    createdAt: new Date('2022-01-29'),
    filterFunction: (user) => user.segment === 'retired',
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
    createdAt: new Date('2022-02-03'),
    filterFunction: (user) => user.segment === 'retired',
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
    createdAt: new Date('2022-01-28'),
    filterFunction: (user) => user.segment === 'admin',
    specificity: 2,
    type: 'userSegment',
    widgetSettings: {
      displayOrder: 1,
      props: {
        introText: 'You work here!',
      },
    },
  },
  {
    createdAt: new Date('2022-01-25'),
    filterFunction: (user) => !!user,
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
];

export interface WidgetRules {
  intro: WidgetRule[];
}

export const INITIAL_WIDGET_RULES: WidgetRules = {
  intro: MOCK_INTRO_RULES,
};
