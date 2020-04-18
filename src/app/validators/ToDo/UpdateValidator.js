import * as Yup from 'yup';
import { defaultResponse, validate } from '../common/DefaultValidation';

/**
 * Validate a to-do task update
 */
export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      text: Yup.string(),
      checked: Yup.boolean(),
    });
    await validate(schema, req.body);
    return next();
  } catch (error) {
    return defaultResponse(res, error);
  }
};
