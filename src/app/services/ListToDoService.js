import ToDo from '../schemas/ToDoSchema';

class ListToDoService {
  run(filter) {
    return ToDo.find(filter);
  }
}

export default new ListToDoService();
