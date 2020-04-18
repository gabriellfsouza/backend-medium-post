import faker from 'faker';

/**
 * This class generate a new random to-do object.
 */
class ToDoFaker {
  /**
   * Create a new random to-do object.
   * @param {Object} obj if you pass a object, it will be merged with a new one
   * @returns {{text:Object,checked:Boolean}}
   */
  create(obj = {}) {
    const toDo = {
      text: faker.lorem.text(),
      checked: faker.random.boolean(),
    };

    return { ...toDo, ...obj };
  }
}

export default new ToDoFaker();
