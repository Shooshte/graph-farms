import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { Item, ItemGroup } from '../libs/types';
import { MockUser } from '../libs/mockData/users';

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
