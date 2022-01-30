import { MOCK_USERS } from '../../libs/mockData/users';

export default function handler(req, res) {
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
}
