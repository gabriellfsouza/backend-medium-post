import database from '../../../src/database';
import GetToDoService from '../../../src/app/services/GetToDoService';
import ToDo from '../../../src/app/schemas/ToDoSchema';
import factories from '../../utils/factories';
import ToDoFaker from '../../utils/fakers/ToDoFaker';

describe('This test\'ll run the get method of a to-do task.', () => {
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
    _id = toDo._id;
  });

  afterEach(async () => {
    ToDo.remove({});
  });

  it('should be able to reutrn a previously created to-do task',
    async () => {
      const toDo = await ToDo.findById(_id);

      const response = await GetToDoService.run(_id);

      expect(toDo).toMatchObject(response);
    });
});
