import { createContext } from 'react';
import { MockUser } from '../../libs/mockData/users';

interface handleUserDataChangeArgs {
  newUserData: MockUser;
  updateRoute?: boolean;
}

export type UserContextState =
  | {
      userData: MockUser;
      setUserData: (args: handleUserDataChangeArgs) => void;
    }
  | undefined;

export type UserContextAction = { type: 'checkIsAuthenticated' };

export const UserContext = createContext<UserContextState>(undefined);

export default UserContext;
