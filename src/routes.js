import { Router } from 'express';

/** Controlles */
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

/** Middlewares */
import authMiddleware from './app/middlewares/auth';

const router = new Router();

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

router.use(authMiddleware);

router.put('/users', UserController.update);

export default router;
