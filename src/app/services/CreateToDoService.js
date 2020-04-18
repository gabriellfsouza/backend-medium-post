import ToDo from '../schemas/ToDoSchema';
import GetToDoService from './GetToDoService';

class CreateToDoService {
  /**
   * Create a new to-do task
   * @param toDoParams
   * @param {String} toDoParams.text
   * @param {Boolean} toDoParams.checked
   * @returns {Promise}
   */
  async run(data) {
    const toDo = await ToDo.create(data);
    return GetToDoService.run(toDo._id);
  }
}

export default new CreateToDoService();
