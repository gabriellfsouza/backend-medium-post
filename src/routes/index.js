import { Router } from 'express';

import todos from './todos';

const routes = new Router();

/**
 * Simple responser
 * @param {Request} req
 * @param {Response} res
 */
async function baseResponser(req, res) {
  res.status(200).json({ message: 'ok' });
}


routes.get('/', baseResponser);

/**
 * To-do's route
 */
routes.use('/todos', todos);

export default routes;
