import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

/** Controlles */
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import FileController from './app/controller/FileController';
import ProviderController from './app/controller/ProviderController';
import AppointmentController from './app/controller/AppointmentController';
import ScheduleController from './app/controller/ScheduleController';
import NotificationsController from './app/controller/NotificationsController';
import AvailableController from './app/controller/AvailableController';

/** Middlewares */
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationsController.index);
routes.put('/notifications/:id', NotificationsController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
