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
    pastMonthPurchases: [],
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
