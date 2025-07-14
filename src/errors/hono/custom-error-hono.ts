import type { ContentfulStatusCode } from 'hono/utils/http-status';

export abstract class CustomError extends Error {
  abstract statusCode: ContentfulStatusCode;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string | number }[];
}
