import database from '../../src/database';
import app from '../../src/app';
import {
  superPost, superPut, superGet, superDelete,
} from '../utils/supertest';
import ToDo from '../../src/app/schemas/ToDoSchema';
import ToDoFaker from '../utils/fakers/ToDoFaker';
import factories from '../utils/factories';

describe('This code will test all crud operations mapped to ToDoController',
  () => {
    const baseUrl = '/v1/api/todos';
    beforeAll(async () => {
      await app;
      await database.mongo();
    });

    afterAll(async () => {
      await database.mongoConnection.disconnect();
    });

    beforeEach(async () => {
      await ToDo.remove({});
    });

    describe('POST /todos operation', () => {
      let newToDo = {};

      beforeEach(async () => {
        newToDo = ToDoFaker.create();
      });

      afterEach(async () => {
        ToDo.remove({});
      });

      it('should be able to create a new to-do task', async () => {
        // prevents any abnormal behavior by the original object manipulation.
        const currentToDo = { ...newToDo };
        const response = await superPost(app, baseUrl, currentToDo);

        expect(response.status).toBe(200);
        expect(!!response.body).toBe(true);
        expect(newToDo.text).toBe(currentToDo.text);
        expect(newToDo.checked).toBe(currentToDo.checked);

        const toDo = await ToDo.findById(response.body._id);
        const objTodo = JSON.parse(JSON.stringify(toDo.toJSON()));
        expect(objTodo).toMatchObject(response.body);
      });

      it('should be able to create a new to-do task without checked property',
        async () => {
          const { text } = newToDo;
          const response = await superPost(app, baseUrl, { text });

          expect(response.status).toBe(200);
          expect(response.body.text).toBe(text);
          expect(!!response.body._id).toBe(true);

          const toDo = await ToDo.findById(response.body._id);

          expect(toDo.text).toBe(text);
        });

      it('shouldn\'t be able to create a new to-do task without its text',
        async () => {
          const response = await superPost(app, baseUrl, { checked: true });
          expect(response.status).toBe(400);
          expect(JSON.stringify(response.body)).toContain('text is a required field');
        });
    });

    describe('GET /todos operation', () => {
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
      });

      afterEach(async () => {
        ToDo.remove({});
      });

      it('should be able to list all to-do tasks', async () => {
        const response = await superGet(app, baseUrl);

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(6);
      });
    });

    describe('PUT /todos/:id operation', () => {
      let _id = '';

      beforeEach(async () => {
        const toDo = await factories.create('ToDo', ToDoFaker.create());
        _id = `${toDo._id}`;
      });

      afterEach(async () => {
        ToDo.remove({});
      });

      it('should be able to update a to-do task', async () => {
        const newData = ToDoFaker.create();
        const response = await superPut(app, `${baseUrl}/${_id}`, newData);

        expect(response.status).toBe(200);
        expect(response.body.text).toBe(newData.text);
        expect(response.body.checked).toBe(newData.checked);
      });

      it('shuldn\'t be able to update a to-do task that doesn\'t exist',
        async () => {
          await ToDo.remove({});
          const newData = ToDoFaker.create();
          const response = await superPut(app, `${baseUrl}/${_id}`, newData);

          expect(response.status).toBe(404);
        });
    });

    describe('GET /todos/:id operation', () => {
      let _id = '';
      const newData = ToDoFaker.create();

      beforeEach(async () => {
        const toDo = await factories.create('ToDo', newData);
        _id = toDo._id;
      });

      afterEach(async () => {
        ToDo.remove({});
      });

      it('should be able to get a specific to-do task', async () => {
        const response = await superGet(app, `${baseUrl}/${_id}`);
        expect(response.status).toBe(200);
        expect(response.body.text).toBe(newData.text);
        expect(response.body.checked).toBe(newData.checked);
      });

      it('shuldn\'t be able to get a to-do task that doesn\'t exist',
        async () => {
          await ToDo.remove({});
          const response = await superGet(app, `${baseUrl}/${_id}`);

          expect(response.status).toBe(404);
        });
    });

    describe('DELETE /todos/:id operation', () => {
      let _id = '';

      beforeEach(async () => {
        const toDo = await factories.create('ToDo', ToDoFaker.create());
        _id = `${toDo._id}`;
      });

      afterEach(async () => {
        ToDo.remove({});
      });

      it('should be able to delete a to-do task', async () => {
        const response = await superDelete(app, `${baseUrl}/${_id}`);
        expect(response.status).toBe(204);
      });

      it('shouldn\'t be able to delete a to-to task that doesn\'t exist',
        async () => {
          await ToDo.remove({});
          const response = await superDelete(app, `${baseUrl}/${_id}`);
          expect(response.status).toBe(404);
        });
    });
  });
