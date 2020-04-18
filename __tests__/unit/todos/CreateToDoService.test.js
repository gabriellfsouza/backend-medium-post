import database from '../../../src/database';
import CreateToDoService from '../../../src/app/services/CreateToDoService';
import ToDo from '../../../src/app/schemas/ToDoSchema';
import ToDoFaker from '../../utils/fakers/ToDoFaker';

describe('This test\'ll run the create method of a to-do task.', () => {
  beforeAll(async () => {
    await database.mongo();
  });

  afterAll(async () => {
    await database.mongoConnection.disconnect();
  });

  it('should be able to create a new to-do task', async () => {
    const fake = { text: 'Thats my text example.', checked: false };
    const { _id, text, checked } = await CreateToDoService.run(fake);

    expect(!!_id).toBe(true);

    const toDo = await ToDo.findById(_id);
    expect(`${toDo._id}`).toBe(`${_id}`);
    expect(toDo.text).toBe(text);
    expect(toDo.checked).toBe(checked);
    expect(!!toDo.createdAt).toBe(true);
    expect(!!toDo.updatedAt).toBe(true);
  });

  it('should not be able to create a new to-do task without a text.', async () => {
    async function create() {
      const { checked } = ToDoFaker.create();
      await ToDo.create({ checked });
    }
    expect(create()).rejects.toThrowError(/Path `text` is required/);
  });
});
