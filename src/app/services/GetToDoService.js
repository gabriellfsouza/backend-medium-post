/** @typedef {import('mongoose').Schema.Types.ObjectId} ObjectId */
/** @typedef {import('mongoose').Document} Document */

import ToDo from '../schemas/ToDoSchema';

class GetToDoService {
  /**
   *
   * @param {ObjectId} _id
   * @returns {Document}
   */
  async run(_id) {
    const toDo = await ToDo.findById(_id);
    if (!toDo) throw new ValidationError('to-do task not found', 404);
    return toDo;
  }
}

export default new GetToDoService();
