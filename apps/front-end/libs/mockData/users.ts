import { UserProfile } from '../types';

export interface MockUser extends UserProfile {
  id: string;
  username: string;
  password: string;
  role: 'admin' | 'user';
}

export const MOCK_USERS: MockUser[] = [
  {
    basket: {
      createdAt: '2022-01-27',
      lines: [],
    },
    createdAt: '2022-01-27',
    id: 'regular',
    username: 'regular',
    password: 'regular',
    segment: 'regular',
    pastMonthPurchases: [
      {
        createdAt: '2022-01-26',
        lines: [
          {
            itemId: '55',
            quantity: 2,
          },
        ],
      },
      {
        createdAt: '2022-01-26',
        lines: [
          {
            itemId: '3',
            quantity: 2,
          },
          {
            itemId: '6',
            quantity: 2,
          },
          {
            itemId: '18',
            quantity: 2,
          },
        ],
      },
      {
        createdAt: '2022-01-17',
        lines: [
          {
            itemId: '1',
            quantity: 2,
          },
          {
            itemId: '2',
            quantity: 2,
          },
          {
            itemId: '4',
            quantity: 2,
          },
        ],
      },
      {
        createdAt: '2022-01-15',
        lines: [
          {
            itemId: '19',
            quantity: 2,
          },
          {
            itemId: '22',
            quantity: 2,
          },
          {
            itemId: '33',
            quantity: 2,
          },
        ],
      },
      {
        createdAt: '2022-01-12',
        lines: [
          {
            itemId: '43',
            quantity: 2,
          },
          {
            itemId: '44',
            quantity: 2,
          },
        ],
      },
      {
        createdAt: '2022-01-09',
        lines: [
          {
            itemId: '39',
            quantity: 2,
          },
          {
            itemId: '22',
            quantity: 2,
          },
          {
            itemId: '33',
            quantity: 2,
          },
        ],
      },
      {
        createdAt: '2022-01-08',
        lines: [
          {
            itemId: '4',
            quantity: 2,
          },
          {
            itemId: '5',
            quantity: 10,
          },
          {
            itemId: '7',
            quantity: 1,
          },
        ],
      },
    ],
    role: 'user',
  },
  {
    basket: {
      createdAt: '2022-01-27',
      lines: [],
    },
    createdAt: '2022-01-27',
    id: 'test1',
    username: 'test1',
    password: 'test1',
    segment: 'retired',
    pastMonthPurchases: [],
    role: 'user',
  },
  {
    basket: {
      createdAt: '2022-01-26',
      lines: [],
    },
    createdAt: '2022-01-26',
    id: 'test2',
    username: 'test2',
    password: 'test2',
    segment: 'blue-collar',
    pastMonthPurchases: [],
    role: 'user',
  },
  {
    basket: {
      createdAt: '2022-01-22',
      lines: [],
    },
    createdAt: '2022-01-22',
    id: 'admin',
    username: 'admin',
    password: 'admin',
    segment: 'admin',
    pastMonthPurchases: [],
    role: 'admin',
  },
];
