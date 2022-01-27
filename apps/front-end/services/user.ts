import axios from 'axios';

// TODO replace this with global .env constant
const API_URL = 'http://localhost:3333/api';

import { MockUser } from '../../../libs/mockData/users';

interface ProfileParams {
  username: string;
  password: string;
}

export const postGetProfile = async ({
  username,
  password,
}: ProfileParams): Promise<MockUser> => {
  const response = await axios.post(`${API_URL}/getProfile`, {
    username,
    password,
  });

  return response.data;
};
