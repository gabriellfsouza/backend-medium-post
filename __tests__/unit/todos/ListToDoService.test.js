import database from '../../../src/database';
import ListToDoService from '../../../src/app/services/ListToDoService';
import ToDo from '../../../src/app/schemas/ToDoSchema';
import factories from '../../utils/factories';
import ToDoFaker from '../../utils/fakers/ToDoFaker';

describe("This test'll run the list method of to-do tasks.", () => {
  // object shared by all tests
  let toDos;

  beforeAll(async () => {
    await database.mongo();
  });

  afterAll(async () => {
    await database.mongoConnection.disconnect();
  });

  beforeEach(async () => {
    try {
      await Promise.all([
        factories.create('ToDo', ToDoFaker.create()),
        factories.create('ToDo', ToDoFaker.create()),
        factories.create('ToDo', ToDoFaker.create()),
        factories.create('ToDo', ToDoFaker.create()),
        factories.create('ToDo', ToDoFaker.create()),
        factories.create('ToDo', ToDoFaker.create()),
      ]);
    } catch (error) {
      process.exit();
    }
    toDos = await ToDo.find();
  });

  afterEach(async () => {
    ToDo.remove({});
  });

  it('should be able to list all tasks created before', async () => {
    const response = await ListToDoService.run();

    expect(toDos).toMatchObject(response);
  });
});
