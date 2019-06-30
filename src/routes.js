import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import AttendanceController from './app/controllers/AttendanceController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/meetups', MeetupController.store);
routes.get('/meetups', MeetupController.index);
routes.delete('/meetups/:id', MeetupController.delete);
routes.put('/meetups/:id', MeetupController.update);

routes.post('/attendances', AttendanceController.store);
routes.get('/attendances', AttendanceController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
