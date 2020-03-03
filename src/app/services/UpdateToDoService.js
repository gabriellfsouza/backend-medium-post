/** @typedef {import('mongoose').Schema.Types.ObjectId} ObjectId */
/** @typedef {import('mongoose').Document} Document */

import ToDo from '../schemas/ToDoSchema';
import GetToDoService from './GetToDoService';

class UpdateToDoService {
  /**
   *
   * @param {Schema.Types.ObjectId} _id
   * @param {ToDo} data
   * @returns {Document}
   */
  async run(_id, { _id: _, ...data }) {
    await ToDo.findByIdAndUpdate(_id, data);

    const toDo = await GetToDoService.run(_id);

    return toDo;
  }
}

export default new UpdateToDoService();
