import { ContentfulStatusCode } from 'hono/utils/http-status';
import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode: ContentfulStatusCode = 401;

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}
