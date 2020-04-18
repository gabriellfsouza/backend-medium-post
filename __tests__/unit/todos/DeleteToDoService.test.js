import DeleteToDoService from '../../../src/app/services/DeleteToDoService';
import database from '../../../src/database';
import ToDo from '../../../src/app/schemas/ToDoSchema';
import factories from '../../utils/factories';
import ToDoFaker from '../../utils/fakers/ToDoFaker';

describe('This test\'ll run the delete method of a to-do task.', () => {
  // id shared by all tests
  let _id;

  beforeAll(async () => {
    await database.mongo();
  });

  afterAll(async () => {
    await database.mongoConnection.disconnect();
  });

  beforeEach(async () => {
    const toDo = await factories.create('ToDo', ToDoFaker.create());
    _id = `${toDo._id}`;
  });

  afterEach(async () => {
    ToDo.remove({});
  });

  it('should be able to delete a previously created to-do task',
    async () => {
      const response = await DeleteToDoService.run(_id);
      const after = await ToDo.findById(_id);

      expect(!after).toBe(true);
      expect(!response).toBe(true);
    });
});
