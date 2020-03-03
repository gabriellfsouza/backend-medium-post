/** @typedef {import('mongoose').Schema.Types.ObjectId} ObjectId */

import GetToDoService from './GetToDoService';

class DeleteToDoService {
  /**
   * Delete a to-do task
   * @param {ObjectId} _id
   * @returns {Promise}
   */
  async run(_id) {
    const toDo = await GetToDoService.run(_id);

    await toDo.remove();
  }
}

export default new DeleteToDoService();
