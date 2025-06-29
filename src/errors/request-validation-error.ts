// import { zValidator } from "@hono/zod-validator";
import type { ContentfulStatusCode } from 'hono/utils/http-status';
import { type ZodIssue } from 'zod';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode: ContentfulStatusCode = 400;

  constructor(public errors: ZodIssue[]) {
    super('Invalid request parameters');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.message,
      field: error.path[0],
    }));
  }
}
