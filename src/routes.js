import { Router } from 'express';
import User from './app/models/User';

const router = new Router();

router.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Ruan Aragao',
    email: 'aragao.ruan@gmail.com',
    password_hash: '12345',
  });
  return res.json(user);
});

export default router;
