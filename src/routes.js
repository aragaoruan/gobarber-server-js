import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

/** Controlles */
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

/** Middlewares */
import authMiddleware from './app/middlewares/auth';

const router = new Router();
const upload = multer(multerConfig);

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

router.use(authMiddleware);

router.put('/users', UserController.update);

router.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default router;
