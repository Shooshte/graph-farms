import { MOCK_ITEM_GROUPS } from '../../../../libs/mockData/items';

export default function handler(req, res) {
  res.status(200).send(MOCK_ITEM_GROUPS);
}
