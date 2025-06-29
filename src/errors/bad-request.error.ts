import { ContentfulStatusCode } from 'hono/utils/http-status';
import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode: ContentfulStatusCode = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
