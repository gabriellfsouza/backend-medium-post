/** @typedef {import ('express').Request} Request */
/** @typedef {import ('express').Response} Response */

import CreateToDoService from '../services/CreateToDoService';
import GetToDoService from '../services/GetToDoService';
import ListToDoService from '../services/ListToDoService';
import UpdateToDoService from '../services/UpdateToDoService';
import DeleteToDoService from '../services/DeleteToDoService';
import ControllerUtil from '../utils/ControllerUtil';


class ToDoController extends ControllerUtil {
  constructor() {
    super();

    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.index = this.index.bind(this);
    this.destroy = this.destroy.bind(this);
    this.show = this.show.bind(this);
  }

  /**
   * List all to-do tasks.
   * @param {Request} req
   * @param {Response} res
   */
  async index(req, res) {
    const promise = (async () => ListToDoService.run(req.query))();

    return this.defaultHandler(res, promise);
  }

  /**
   * Return a specific to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async show(req, res) {
    const { _id } = req.params;
    const promise = (async () => GetToDoService.run(_id, req.body))();

    return this.defaultHandler(res, promise);
  }

  /**
   * Insert a new to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async store(req, res) {
    const promise = (async () => CreateToDoService.run(req.body))();

    return this.defaultHandler(res, promise);
  }

  /**
   * Update a to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async update(req, res) {
    const { _id } = req.params;
    const promise = (async () => UpdateToDoService.run(_id, req.body))();

    return this.defaultHandler(res, promise);
  }

  /**
   * Remove a to-do task.
   * @param {Request} req
   * @param {Response} res
   */
  async destroy(req, res) {
    const { _id } = req.params;
    const promise = (async () => DeleteToDoService.run(_id, req.body))();

    return this.defaultHandler(res, promise);
  }
}

export default new ToDoController();
