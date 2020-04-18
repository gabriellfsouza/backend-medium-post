/** @typedef {import('yup').ObjectSchema<object>} Schema */

/**
 * Default validation of any schema.
 * @param {Schema} schema
 * @param {Object} object
 * @returns {Promise}
 */
export function validate(schema, object) {
  return schema.validate(object, { abortEarly: false });
}

/**
 * Default validation error handling
 * @param {Response} res
 * @param {Error} error
 * @returns {Promise}
 */
export async function defaultResponse(res, error) {
  return res
    .status(400)
    .json({ error: 'Validation fails', messages: error.inner });
}
