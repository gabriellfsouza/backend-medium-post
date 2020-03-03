/** @typedef {import ('express').Request} Request */
/** @typedef {import ('express').Response} Response */


class ToDoController {
  /**
   * List all to-do tasks.
   * @param {Request} req
   * @param {Response} res
   */
  async index(req, res) {
    return res.send([]);
  }

  /**
   * Return a specific to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async show(req, res) {
    return res.send({});
  }

  /**
   * Insert a new to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async store(req, res) {
    return res.send({});
  }

  /**
   * Update a to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async update(req, res) {
    return res.send({});
  }

  /**
   * Remove a to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async destroy(req, res) {
    return res.status(204).send();
  }
}

export default new ToDoController();
