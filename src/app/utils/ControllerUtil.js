class ControllerUtils {
  constructor() {
    this.defaultHandler = this.defaultHandler.bind(this);
  }

  /**
   *
   * @param {Response} res
   * @param {Promise} promise
   */
  async defaultHandler(res, promise) {
    try {
      const data = await promise;
      if (data) return res.status(200).json(data);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(error.code).json({ error: error.message });
      }
      throw error;
    }
  }
}

export default ControllerUtils;
