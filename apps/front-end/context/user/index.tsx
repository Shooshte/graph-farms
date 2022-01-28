import { createContext } from 'react';
import { MockUser } from '../../../../libs/mockData/users';

export type UserContextState =
  | {
      userData: MockUser;
      setUserData: (data: MockUser) => void;
    }
  | undefined;

export type UserContextAction = { type: 'checkIsAuthenticated' };

export const UserContext = createContext<UserContextState>(undefined);

export default UserContext;
