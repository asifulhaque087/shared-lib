import type { ContentfulStatusCode } from 'hono/utils/http-status';
import { CustomError } from './custom-error-hono';

export class DatabaseConnectionError extends CustomError {
  statusCode: ContentfulStatusCode = 500;

  constructor() {
    super('Error connecting to db');

    // only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Error connecting to database' }];
  }
}
