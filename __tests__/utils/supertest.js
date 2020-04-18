import request from 'supertest';

/**
 * Post a request
 * @param {Object} server
 * @param {String} route
 * @param {Object} body
 * @returns {Response}
 */
export const superPost = (server, route, body) => request(server)
  .post(route)
  .send(body);

/**
 * Make a get request
 * @param {Object} server
 * @param {String} route
 * @param {Object} query
 * @returns {Promise}
 */
export const superGet = (server, route, query = {}) => request(server)
  .get(route)
  .query(query);

/**
 * Make a delete request
 * @param {Object} server
 * @param {String} route
 * @returns {Promise}
 */
export const superDelete = (server, route) => request(server).delete(route);

/**
 * Make a put request
 * @param {Object} server
 * @param {String} route
 * @param {Promise} body
 */
export const superPut = (server, route, body) => request(server)
  .put(route)
  .send(body);
