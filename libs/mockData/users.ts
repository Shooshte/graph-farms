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
      createdAt: new Date('27-01-2022'),
      lines: [],
    },
    createdAt: new Date('27-01-2022'),
    id: 'test1',
    username: 'test1',
    password: 'test1',
    segment: 'retired',
    pastMonthPurchases: [],
    role: 'user',
  },
  {
    basket: {
      createdAt: new Date('26-01-2022'),
      lines: [],
    },
    createdAt: new Date('26-01-2022'),
    id: 'test2',
    username: 'test2',
    password: 'test2',
    segment: 'blue-collar',
    pastMonthPurchases: [],
    role: 'user',
  },
  {
    basket: {
      createdAt: new Date('22-01-2022'),
      lines: [],
    },
    createdAt: new Date('22-01-2022'),
    id: 'admin',
    username: 'admin',
    password: 'admin',
    segment: 'admin',
    pastMonthPurchases: [],
    role: 'admin',
  },
];
