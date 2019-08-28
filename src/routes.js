import { Router } from 'express';

/** Controlles */
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

const router = new Router();

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

export default router;
