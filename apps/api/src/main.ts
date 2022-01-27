/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

// types
import { UserTypeProfile } from '../../../libs/types/';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api Šušti!' });
});

app.get('/api/getProfile', (req, res) => {
  const mockUserProfile: UserTypeProfile = {
    segment: 'test',
    pastMonthPurchases: [],
    basket: {
      createdAt: new Date(),
      lines: [],
    },
    createdAt: new Date(),
  };
  res.send({ ...mockUserProfile });
});

app.get('/api/getItemsInfo', (req, res) => {
  res.status(404).send('Not implemented yet!');
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
