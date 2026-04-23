import { Router } from 'express';
import indexController from '../controllers/indexController.js';
import newMessageController from '../controllers/newMessageController.js';

const indexRouter = Router();

indexRouter.get('/', indexController.get);

indexRouter
  .route('/new')
  .get(newMessageController.get)
  .post(newMessageController.post);

export default indexRouter;
