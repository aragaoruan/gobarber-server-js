import { Router } from 'express';

/** Controlles */
import UserController from './app/controller/UserController';

const router = new Router();

router.post('/users', UserController.store);

export default router;
