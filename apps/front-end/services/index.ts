import axios from 'axios';

// TODO replace this with global .env constant
const API_URL = 'http://localhost:3333/api';

import { Item, ItemGroup } from '../../../libs/types';
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

export const getItemsInfo = async (): Promise<Item[]> => {
  const response = await axios.get(`${API_URL}/getItemsInfo`);
  return response.data;
};

export const getItemsGroups = async (): Promise<ItemGroup[]> => {
  const response = await axios.get(`${API_URL}/getItemsGroups`);
  return response.data;
};
