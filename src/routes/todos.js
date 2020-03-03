import { Router } from 'express';

import ToDoController from '../app/controllers/ToDoController';

const routes = new Router();

routes
  .route('/')
  .post(ToDoController.store)
  .get(ToDoController.index);

routes
  .route('/:_id')
  .get(ToDoController.show)
  .put(ToDoController.update)
  .delete(ToDoController.destroy);

export default routes;
