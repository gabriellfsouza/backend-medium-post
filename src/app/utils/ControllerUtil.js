class ControllerUtils {
  constructor() {
    this.defaultHandler = this.defaultHandler.bind(this);
  }

  /**
   * Default response handler pattern.
   * When the promise resulted in a exception, we validate if is a controled
   * exception or a not known exception (returning the right response or passing
   * the threatment to app http 500 default handling).
   * @param {Response} res
   * @param {Promise} promise promise started
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
