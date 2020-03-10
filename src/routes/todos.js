import { Router } from 'express';

import StoreValidator from '../app/validators/ToDo/StoreValidator';
import UpdateValidator from '../app/validators/ToDo/UpdateValidator';
import ToDoController from '../app/controllers/ToDoController';

const routes = new Router();

routes
  .route('/')
  .post([StoreValidator], ToDoController.store)
  .get(ToDoController.index);

routes
  .route('/:_id')
  .get(ToDoController.show)
  .put([UpdateValidator], ToDoController.update)
  .delete(ToDoController.destroy);

export default routes;
