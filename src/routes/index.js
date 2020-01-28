import { Router } from 'express';

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

export default routes;
