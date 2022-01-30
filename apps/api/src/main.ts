import * as express from 'express';
import * as cors from 'cors';

// mock data
import { MOCK_ITEMS, MOCK_ITEM_GROUPS } from '../../../libs/mockData/items';
import { MOCK_USERS } from '../../../libs/mockData/users';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.post('/api/getProfile', (req, res) => {
  try {
    const { username, password } = req.body;
    const user = MOCK_USERS.find((user) => {
      return user.username === username && user.password && password;
    });

    if (user) {
      res.status(200).send({ ...user });
    } else {
      res.status(404).send('Incorrect credentials!');
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get('/api/getItemsInfo', (req, res) => {
  res.status(200).send(MOCK_ITEMS);
});

app.get('/api/getItemsGroups', (req, res) => {
  res.status(200).send(MOCK_ITEM_GROUPS);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
