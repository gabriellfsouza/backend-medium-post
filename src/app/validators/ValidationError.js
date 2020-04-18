/**
 * This class must be used to handle business errors
 */
class ValidationError extends Error {
  /**
   * Returns a new instance of error
   * @param {String} message
   * @param {Number} code
   */
  constructor(message, code = 500) {
    super(message);
    this.code = code;
  }
}
global.ValidationError = ValidationError;
export default ValidationError;
